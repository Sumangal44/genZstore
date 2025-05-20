import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className=" w-full md:w-2/3 text-gray-600">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5 "> Compaany</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5" > GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1 234 567 89</li>
            <li> contact@genZstore.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr/>
        <p className="text-center text-gray-600 text-sm mb-5 py-5">
          © 2025 genZstore. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
