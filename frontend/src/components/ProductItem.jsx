import { useContext } from 'react';
import { ShopContext } from '../context/ShopContextConfig';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, images, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      to={`/product/${id}`}
      className="group block bg-white rounded-xl shadow hover:shadow-md transition duration-300 p-3"
    >
      <div className="overflow-hidden rounded-lg aspect-square bg-gray-100">
        <img
          src={images && images.length > 0 ? images[0] : "/placeholder.jpg"}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="pt-4">
        <p className="text-sm font-medium text-gray-800 group-hover:text-black truncate">{name}</p>
        <p className="text-sm font-semibold text-gray-900 mt-1">
          {currency}
          {price}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
