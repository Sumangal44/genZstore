import React, { useEffect, useContext, useState } from "react";
import { ShopContext } from '../context/ShopContextConfig';
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { serach, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (location.pathname.includes("collection") && showSearch) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location, showSearch]);

  if (!(showSearch && visible)) return null;

  return (
    <div className="bg-gray-50 border-t border-b border-gray-300 py-4 px-4 sm:px-6 md:px-12 flex flex-col sm:flex-row items-center justify-center gap-4">
      
      <div className="flex items-center w-full sm:w-3/4 max-w-xl bg-white border border-gray-300 rounded-full shadow-sm px-4 py-2 focus-within:ring-2 focus-within:ring-blue-500">
        <input
          value={serach}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search"
          className="flex-grow text-sm sm:text-base outline-none bg-transparent text-gray-700 placeholder-gray-400"
          aria-label="Search products"
        />
        <img
          src={assets.search_icon}
          alt="Search icon"
          className="w-5 h-5 text-gray-500"
          aria-hidden="true"
        />
      </div>

      <button
        onClick={() => setShowSearch(false)}
        aria-label="Close search"
        className="text-gray-500 hover:text-gray-800 transition rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <img src={assets.cross_icon} alt="Close icon" className="w-5 h-5" />
      </button>
    </div>
  );
};

export default SearchBar;
