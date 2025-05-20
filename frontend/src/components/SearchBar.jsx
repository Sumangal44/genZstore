import React, { useEffect, useContext ,useState} from "react";
import { ShopContext } from '../context/ShopContextConfig'
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { serach, setSearch, showSearch, setShowSearch } =    useContext(ShopContext);
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    // console.log(location.pathname);
    if (location.pathname.includes("collection")&& showSearch) {
      setVisible(true);
    }
    else{
      setVisible(false);
    }
  }, [location, showSearch]);

  return showSearch && visible ? (
    <div className="border-t border-b-gray-500 bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4  ">
        <input
          value={serach}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm"
          type="text"
          placeholder="Search"
        />
        <img className="w-4" src={assets.search_icon} alt="" />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        className="inline w-3 cursor-pointer"
        src={assets.cross_icon}
        alt=""
      />
    </div>
  ) : null;
};

export default SearchBar;
