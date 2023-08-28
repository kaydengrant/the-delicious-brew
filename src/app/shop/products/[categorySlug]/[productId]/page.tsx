'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

import {
  addCommasToNumber,
  capitalizeString,
  Check,
  Cart,
  AngleRight,
  Truck,
  BoxOpen,
  Lock,
  Warning,
} from '../../../../../utils';
import {
  NavFooter,
  OutlineButton,
  QuantityButton,
  ProductSpecifications,
  Carousel,
  SimilarProducts,
  Loading,
  InViewAnimationWrapper,
  AlertBanner,
} from '../../../../../components';
import { useStateContext } from '../../../../../context/StateContext';
import { client, urlForImage } from '../../../../../../sanity/lib/client';

const ProductFocused: React.FC = () => {
  const [sanityProduct, setSanityProduct] = useState<any | null>(null);
  const [currentImage, setCurrentImage] = useState<any>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { decQty, incQty, qty, setQty, onAdd } = useStateContext();

  const pathname = usePathname().split('/');
  const searchParams = useSearchParams();
  const productId = pathname[pathname.length - 1];
  const productName = searchParams.get('productName') || '';

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
      <AlertBanner
        text={[
          'Products are not purchasable',
          'This is only a portfolio project',
        ]}
        Icon={Warning}
      />
      <section>
        <p className="md:w-[65%]">{capitalizedPathname}</p>
        <InViewAnimationWrapper className="w-full">
          <section className="flex flex-col lg:flex-row items-center lg:items-stretch lg:justify-between gap-10">
            <Carousel
              index={currentIndex}
              setIndex={setCurrentIndex}
              length={sanityProduct[0].image.length}
              additionalSetterDown={() => {
                if (currentIndex - 1 < 0) {
                  setCurrentImage(
                    urlForImage(
                      sanityProduct[0].image[sanityProduct[0].image.length - 1]
                    )
                      .width(1000)
                      .url()
                  );
                } else {
                  setCurrentImage(
                    urlForImage(sanityProduct[0].image[currentIndex - 1])
                      .width(1000)
                      .url()
                  );
                }
              }}
              additionalSetterUp={() => {
                if (currentIndex + 1 > sanityProduct[0].image.length - 1) {
                  setCurrentImage(
                    urlForImage(sanityProduct[0].image[0]).width(1000).url()
                  );
                } else {
                  setCurrentImage(
                    urlForImage(sanityProduct[0].image[currentIndex + 1])
                      .width(1000)
                      .url()
                  );
                }
              }}
            >
              <div className="flex flex-col gap-4">
                <div
                  className={`flex relative rounded-xl ${
                    currentIndex % 3 == 0
                      ? 'bg-blue'
                      : currentIndex % 3 == 1
                      ? 'bg-green'
                      : 'bg-brown'
                  } w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] p-2 drop-shadow-sm`}
                >
                  {currentImage ? (
                    <Image
                      loader={() => currentImage}
                      src={currentImage}
                      alt="Product focused image"
                      className="drop-shadow-xl object-cover rounded-xl"
                      loading="lazy"
                      fill
                      unoptimized
                    />
                  ) : (
                    // for first render
                    <Image
                      loader={() => img}
                      src={img}
                      alt="Product focused image"
                      className="drop-shadow-xl object-cover rounded-xl"
                      loading="lazy"
                      fill
                      unoptimized
                    />
                  )}
                </div>
                <div className="flex relative max-w-[200px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[450px]">
                  <div className="flex flex-row relative w-full overflow-x-auto gap-2 scrollbar snap-x pb-2">
                    {sanityProduct[0].image.map((item: any, index: number) => {
                      const imgPreview = urlForImage(item).width(1000).url();

                      return (
                        <div
                          key={index}
                          className={`flex relative rounded-xl ${
                            index % 3 == 0 && index === currentIndex
                              ? 'bg-blue'
                              : index % 3 == 1 && index === currentIndex
                              ? 'bg-green'
                              : index % 3 == 2 && index === currentIndex
                              ? 'bg-brown'
                              : 'bg-gray'
                          } ${
                            index === currentIndex
                              ? 'border-2 border-gray'
                              : undefined
                          } min-w-[100px] min-h-[100px] snap-start p-2 drop-shadow-sm`}
                          onClick={() => {
                            setCurrentImage(
                              urlForImage(item).width(1000).url()
                            );
                            setCurrentIndex(index);
                          }}
                        >
                          <Image
                            loader={() => imgPreview}
                            src={imgPreview}
                            alt="Product focused image"
                            className="drop-shadow-sm object-cover rounded-xl"
                            loading="lazy"
                            fill
                            unoptimized
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Carousel>
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
                  <Check size={25} />
                  <p>In Stock</p>
                </div>
                <div className="flex self-center lg:self-start">
                  <QuantityButton
                    quantityState={qty}
                    setQuantityState={setQty}
                    incQuantityState={incQty}
                    decQuantityState={decQty}
                  />
                </div>
                <p className="text-center lg:text-left">
                  Subtotal: ${addCommasToNumber(sanityProduct[0].price * qty)}
                </p>
                <div className="flex flex-col lg:flex-row self-center lg:self-start gap-2 w-52 lg:w-full">
                  <OutlineButton
                    text="Add to Cart"
                    Icon={Cart}
                    onClickFunction={() => onAdd(sanityProduct[0], qty)}
                    fillContainer
                  />
                  <Link href={'/cart'} className="w-full">
                    <OutlineButton
                      text="Buy Now"
                      Icon={AngleRight}
                      onClickFunction={() => onAdd(sanityProduct[0], qty)}
                      fillContainer
                    />
                  </Link>
                </div>
                <p className="text-center">
                  <span className="font-semibold">FREE SHIPPING.</span> Arrives
                  in <span className="font-semibold">3-8 Business Days.</span>
                </p>
                <div className="flex flex-col gap-4">
                  <div className="bg-gray h-0.5" />
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-col items-center text-center">
                      <BoxOpen size={25} />
                      <p className="leading-tight">Easy Returns</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <Lock size={25} />
                      <p className="leading-tight">Secure Transactions</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <Truck size={25} />
                      <p className="leading-tight">Free Shipping</p>
                    </div>
                  </div>
                </div>
              </div>
              {/** spacer */}
              <div className="hidden lg:flex h-[100px]" />
            </div>
          </section>
        </InViewAnimationWrapper>
      </section>
      {sanityProduct[0].specifications && (
        <InViewAnimationWrapper>
          <ProductSpecifications data={sanityProduct[0].specifications} />
        </InViewAnimationWrapper>
      )}
      <InViewAnimationWrapper>
        <SimilarProducts category={sanityProduct[0].category[0]} />
      </InViewAnimationWrapper>
      <NavFooter />
    </>
  );
};

export default ProductFocused;
