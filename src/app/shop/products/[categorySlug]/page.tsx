'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { AddShoppingCart } from '../../../../utils/icons';
import { client, urlForImage } from '../../../../../sanity/lib/client';
import {
  DropDownButton,
  NavFooter,
  OutlineButton,
  QuickAddToCartModal,
  Loading,
} from '../../../../components';
import { addCommasToNumber, capitalizeString } from '@/utils';

const Products: React.FC = () => {
  const [sortByParam, setSortByParam] = useState(dropDownData[0]);
  const [sanityProducts, setSanityProducts] = useState<any[] | null>(null);
  const [numberOfItems, setNumberOfItems] = useState(8);
  const [showQuickAdd, setShowQuickAdd] = useState(false);
  const [quickAddProduct, setQuickAddProduct] = useState<any | null>(null);
  const [quickAddIndex, setQuickAddIndex] = useState(0);

  const router = useRouter();
  const pathname = usePathname().split('/');
  const capitalizedPathname = capitalizeString(
    pathname.join(' / ').substring(3)
  );
  const currentCategory = pathname[pathname.length - 1].toLowerCase();
  const categoryTitle = capitalizeString(currentCategory);
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      router.replace(currentCategory + '?' + params.toString());
    },
    [currentCategory, router, searchParams]
  );

  useEffect(() => {
    const getSanityData = async () => {
      const productsQuery =
        '*[_type == "product" && "' + currentCategory + '" in category]';
      const products = await client.fetch(productsQuery);

      setSanityProducts(products);
    };

    getSanityData();
  }, [currentCategory]);

  useEffect(() => {
    if (!sanityProducts) return;

    createQueryString('sortBy', sortByParam.param);
    const sortProducts = () => {
      let sortedProducts;
      switch (sortByParam.param) {
        case 'featured':
          sortedProducts = sanityProducts.sort(
            (a: { likes: number }, b: { likes: number }) => b.likes - a.likes
          );
          setSanityProducts(sortedProducts);
          break;
        case 'best-selling':
          sortedProducts = sanityProducts.sort(
            (a: { sales: number }, b: { sales: number }) => b.sales - a.sales
          );
          setSanityProducts(sortedProducts);
          break;
        case 'price-high':
          sortedProducts = sanityProducts.sort(
            (a: { price: number }, b: { price: number }) => b.price - a.price
          );
          setSanityProducts(sortedProducts);
          break;
        case 'price-low':
          sortedProducts = sanityProducts.sort(
            (a: { price: number }, b: { price: number }) => a.price - b.price
          );
          setSanityProducts(sortedProducts);
          break;
      }
    };

    sortProducts();
  }, [sortByParam, createQueryString, sanityProducts]);

  if (!sanityProducts) {
    return <Loading />;
  }

  return (
    <>
      {showQuickAdd && quickAddProduct && (
        <QuickAddToCartModal
          data={quickAddProduct}
          setShowQuickAdd={setShowQuickAdd}
          index={quickAddIndex}
        />
      )}
      <section>
        <div className="flex flex-col gap-6 text-center md:text-left">
          <p>{capitalizedPathname}</p>
          <h1>{categoryTitle}</h1>
          <div className="flex flex-col md:flex-row md:justify-between items-center gap-2 md:gap-0">
            <p>Results: {sanityProducts.length} Items</p>
            <div className="flex flex-col md:flex-row items-center gap-0 md:gap-4">
              <p>Sort By:</p>
              <DropDownButton
                data={dropDownData}
                onClickFunction={() =>
                  createQueryString('sortBy', sortByParam.param)
                }
                setState={setSortByParam}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] grid-rows-[auto-fill,minmax(250px,1fr)] grid-flow-dense gap-x-4 justify-center justify-items-center items-center">
          {sanityProducts.slice(0, numberOfItems).map((item, index) => {
            const img = urlForImage(item.image[0]).width(1000).url();

            return (
              <Link
                key={item._id}
                href={`/shop/products/${currentCategory}/${item._id}?productName=${item.name}`}
              >
                <section
                  key={item._id}
                  className="flex flex-col bg-white border-2 border-gray w-[200px] h-[250px] rounded-xl p-2 drop-shadow-xl"
                >
                  <div
                    className={`flex w-full h-full relative ${
                      index % 3 == 0
                        ? 'bg-blue'
                        : index % 3 == 1
                        ? 'bg-green'
                        : 'bg-brown'
                    } rounded-xl`}
                  >
                    <Image
                      loader={() => img}
                      src={img}
                      alt="Product image"
                      className="drop-shadow-xl object-contain"
                      fill
                      unoptimized
                      priority
                    />
                  </div>
                  <div className="flex flex-col justify-end gap-4">
                    <p className="truncate">{item.name}</p>
                    <div className="flex flex-row justify-between items-center ">
                      <h4>${addCommasToNumber(item.price)}</h4>
                      <div
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setShowQuickAdd(true);
                          setQuickAddProduct(item);
                          setQuickAddIndex(index);
                        }}
                        className="flex justify-center items-center w-10 border-2 border-black rounded p-1 clickable"
                      >
                        <AddShoppingCart size={20} />
                      </div>
                    </div>
                  </div>
                </section>
              </Link>
            );
          })}
        </div>
        <div className="flex flex-row justify-center">
          {numberOfItems <= sanityProducts.length && (
            <OutlineButton
              text="Load More"
              onClickFunction={() => setNumberOfItems(numberOfItems + 8)}
            />
          )}
        </div>
      </section>
      <NavFooter />
    </>
  );
};

const dropDownData = [
  { text: 'Featured', param: 'featured' },
  { text: 'Best Selling', param: 'best-selling' },
  { text: 'Price: High to Low', param: 'price-high' },
  { text: 'Price: Low to High', param: 'price-low' },
];

export default Products;
