import { useState} from "react";
import { ShopContext } from "./ShopContextConfig";
import { products } from "../assets/assets";
const ShopContextProvider = (props) => {
  const currency = " ₹";
  const delivery_fee = 50;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  // const [cartItems, setCartItems] = useState({});
  // const [products, setProducts] = useState([]);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
