import  { useEffect, useContext, useState } from "react";
import { ShopContext } from '../context/ShopContextConfig'
import Title from "./Title";
import ProductItem from "./ProductItem";


const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSellers, setBestSellers] = useState([]);
  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSellers(bestProduct.slice(0,5));
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"Best"} text2={"Sellers"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatibus. Quisquam, voluptatibus. Quisquam, voluptatibus.
          Quisquam, voluptatibus.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gapy-6">
        {bestSellers.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            images={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
