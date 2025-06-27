import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContextConfig";
import Title from "./Title";
import ProductItem from "./ProductItem";

export const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [LatestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <section className="my-16 px-4 sm:px-8 lg:px-16">
      <div className="text-center mb-12">
        <Title text1="Latest" text2="Collections" />
        <p className="mt-2 max-w-2xl mx-auto text-sm sm:text-base text-gray-500">
          Discover our newest arrivals, handpicked to keep you stylish and on-trend.
        </p>
      </div>

      {/* Grid of Latest Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
        {LatestProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            images={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
};
