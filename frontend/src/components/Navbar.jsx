import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContextConfig";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch } = useContext(ShopContext);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Collection", path: "/collection" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Reviews", path: "/reviews" },
  ];

  return (
    <header className="w-full shadow-sm border-b border-gray-200 bg-white sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={assets.logo} alt="Logo" className="h-7 md:h-9" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-8 text-sm md:text-base font-medium text-gray-800">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                `relative pb-1 hover:text-black transition ${
                  isActive ? "text-black" : "text-gray-700"
                }`
              }
            >
              {link.name}
              <span
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-black transition-transform duration-300 scale-x-0 ${
                  window.location.pathname === link.path ? "scale-x-100" : ""
                }`}
              ></span>
            </NavLink>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <img
            onClick={() => setShowSearch(true)}
            src={assets.search_icon}
            alt="Search"
            className="w-5 cursor-pointer"
          />
          <div className="relative group">
            <img
              src={assets.profile_icon}
              alt="Profile"
              className="w-5 cursor-pointer"
            />
            {/* Placeholder for dropdown */}
            {/* <div className="absolute hidden group-hover:block top-full right-0 mt-2 bg-white shadow rounded-md">...</div> */}
          </div>
          <Link to="/cart" className="relative">
            <img
              src={assets.cart_icon}
              alt="Cart"
              className="w-5 cursor-pointer"
            />
            <span className="absolute -bottom-1 -right-1 w-4 h-4 text-[10px] flex items-center justify-center text-white bg-black rounded-full">
              5
            </span>
          </Link>
          {/* Hamburger Menu */}
          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            alt="Menu"
            className="w-5 cursor-pointer sm:hidden"
          />
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full bg-white z-40 transition-all duration-300 ${
          visible ? "w-3/4 max-w-xs shadow-lg" : "w-0"
        } overflow-hidden`}
      >
        <div className="p-4">
          {/* Back Button */}
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-2 cursor-pointer mb-6"
          >
            <img
              src={assets.dropdown_icon}
              alt="Back"
              className="h-4 rotate-180"
            />
            <p className="text-gray-600 font-medium">Back</p>
          </div>

          {/* Mobile NavLinks */}
          <nav className="flex flex-col space-y-3 text-gray-700 font-medium">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                onClick={() => setVisible(false)}
                className="py-2 border-b border-gray-100 pl-2 hover:text-black transition"
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
