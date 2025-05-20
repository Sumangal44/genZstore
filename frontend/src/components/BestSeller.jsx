import { useEffect, useContext, useState } from "react";
import { ShopContext } from '../context/ShopContextConfig';
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSellers(bestProduct.slice(0, 5));
  }, [products]);

  return (
    <section className="my-16 px-4 max-w-7xl mx-auto">
      <div className="text-center pb-10">
        <Title text1="Best" text2="Sellers" />
        <p className="mx-auto max-w-xl text-gray-600 text-sm sm:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatibus, quos laborum!
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {bestSellers.map((item) => (
          <ProductItem
            key={item._id}
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

export default BestSeller;
