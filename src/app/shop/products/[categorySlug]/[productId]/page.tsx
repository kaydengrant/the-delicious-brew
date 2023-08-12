'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname, useSearchParams } from 'next/navigation';
import { BsCheckLg } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';
import { FaAngleRight, FaTruck, FaBoxOpen, FaLock } from 'react-icons/fa6';

import { client, urlForImage } from '../../../../../../sanity/lib/client';
import {
  NavBar,
  NavFooter,
  Footer,
  OutlineButton,
  QuantityButton,
  ProductSpecifications,
  Carousel,
} from '../../../../../components';
import Loading from '../../../../loading/page';
import { addCommasToNumber, capitalizeString } from '@/utils';

const ProductFocused: React.FC = () => {
  const [sanityProduct, setSanityProduct] = useState(null);
  const [stockQuantity, setStockQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState<any>();
  const [currentIndex, setCurrentIndex] = useState(0);

  const pathname = usePathname().split('/');
  const searchParams = useSearchParams();
  const productId = pathname[pathname.length - 1];
  const productName = searchParams.get('productName');

  pathname.splice(4, 1, productName);

  const capitalizedPathname = capitalizeString(
    pathname.join(' / ').substring(3)
  );

  useEffect(() => {
    const getSanityData = async () => {
      const productQuery =
        '*[_type == "product" && _id == "' + productId + '"]';
      const product = await client.fetch(productQuery);
      setSanityProduct(product);
    };

    getSanityData();
  }, []);

  useEffect(() => {
    if (!sanityProduct) return;
    setCurrentImage(img);
  }, []);

  if (!sanityProduct) {
    return <Loading />;
  }

  const img = urlForImage(sanityProduct[0].image[0]).width(1000).url();

  return (
    <>
      <NavBar />
      <div className="content-container">
        <section>
          <p>{capitalizedPathname}</p>
          <section className="flex flex-col lg:flex-row items-center lg:items-stretch lg:justify-between gap-10">
            <div className="flex flex-col gap-4">
              <div
                className={`flex relative rounded-xl ${
                  currentIndex % 3 == 0
                    ? 'bg-blue'
                    : currentIndex % 3 == 1
                    ? 'bg-green'
                    : 'bg-brown'
                } w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] p-2 drop-shadow-sm`}
              >
                {currentImage ? (
                  <Image
                    loader={() => currentImage}
                    src={currentImage}
                    alt="Product focused image"
                    className="drop-shadow-xl object-cover rounded-xl"
                    fill
                    unoptimized
                    priority
                  />
                ) : (
                  // for first render
                  <Image
                    loader={() => img}
                    src={img}
                    alt="Product focused image"
                    className="drop-shadow-xl object-cover rounded-xl"
                    fill
                    unoptimized
                    priority
                  />
                )}
              </div>
              <div className="flex relative max-w-[300px] md:max-w-[400px] lg:max-w-[450px]">
                <div className="flex flex-row relative w-full overflow-x-auto gap-2 scrollbar pb-2">
                  {sanityProduct[0].image.map((item, index) => {
                    const imgPreview = urlForImage(item).width(1000).url();

                    return (
                      <div
                        key={index}
                        className={`flex relative rounded-xl ${
                          index % 3 == 0
                            ? 'bg-blue'
                            : index % 3 == 1
                            ? 'bg-green'
                            : 'bg-brown'
                        } ${
                          index === currentIndex
                            ? 'border-2 border-black'
                            : undefined
                        } min-w-[100px] min-h-[100px] p-2 drop-shadow-sm`}
                        onClick={() => {
                          setCurrentImage(urlForImage(item).width(1000).url()),
                            setCurrentIndex(index);
                        }}
                      >
                        <Image
                          loader={() => imgPreview}
                          src={imgPreview}
                          alt="Product focused image"
                          className="drop-shadow-sm object-cover rounded-xl"
                          fill
                          unoptimized
                          priority
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between w-[300px] md:w-[400px] lg:w-[450px]">
              <div className="flex flex-col gap-4">
                <h3 className="text-center lg:text-left">
                  {sanityProduct[0].name}
                </h3>
                <h4 className="font-semibold text-center lg:text-left">
                  ${sanityProduct[0].price}
                </h4>
              </div>
              <div className="flex flex-col gap-4 mt-4 lg:mt-0">
                <div className="flex flex-row gap-4 items-center justify-center lg:justify-start text-successGreen">
                  <BsCheckLg size={25} />
                  <p>In Stock</p>
                </div>
                <div className="flex self-center lg:self-start">
                  <QuantityButton
                    quantityState={stockQuantity}
                    setQuantityState={setStockQuantity}
                  />
                </div>
                <p className="text-center lg:text-left">
                  Subtotal: $
                  {addCommasToNumber(sanityProduct[0].price * stockQuantity)}
                </p>
                <div className="flex flex-col lg:flex-row self-center lg:self-start gap-2 w-52 lg:w-full">
                  <OutlineButton
                    text="Add to Cart"
                    Icon={FaShoppingCart}
                    fillContainer
                  />
                  <OutlineButton
                    text="Buy Now"
                    Icon={FaAngleRight}
                    fillContainer
                  />
                </div>
                <p className="text-center">
                  <span className="font-semibold">FREE SHIPPING.</span> Arrives
                  in <span className="font-semibold">3-8 Business Days.</span>
                </p>
                <div className="flex flex-col gap-4">
                  <div className="bg-gray h-0.5" />
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-col items-center text-center">
                      <FaBoxOpen size={25} />
                      <p className="leading-tight">Easy Returns</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <FaLock size={25} />
                      <p className="leading-tight">Secure Transactions</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <FaTruck size={25} />
                      <p className="leading-tight">Free Shipping</p>
                    </div>
                  </div>
                </div>
              </div>
              {/** spacer */}
              <div className="hidden lg:flex h-[100px]" />
            </div>
          </section>
        </section>
        {sanityProduct[0].specifications && (
          <ProductSpecifications data={sanityProduct[0].specifications} />
        )}
        <NavFooter />
        <Footer />
      </div>
    </>
  );
};

export default ProductFocused;
