import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 mt-40">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] gap-12">
        {/* Logo and description */}
        <div>
          <img src={assets.logo} alt="genZstore logo" className="mb-6 w-36 sm:w-40" />
          <p className="text-gray-600 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod, nunc vel consectetur sagittis, enim elit placerat odio, in dapibus urna erat a metus.
          </p>
        </div>

        {/* Company links */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Company</h3>
          <ul className="space-y-3 text-gray-600">
            <li><a href="/" className="hover:text-blue-600 transition">Home</a></li>
            <li><a href="/about" className="hover:text-blue-600 transition">About Us</a></li>
            <li><a href="/delivery" className="hover:text-blue-600 transition">Delivery</a></li>
            <li><a href="/privacy-policy" className="hover:text-blue-600 transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
          <ul className="space-y-3 text-gray-600">
            <li>Phone: <a href="tel:+123456789" className="hover:text-blue-600 transition">+1 234 567 89</a></li>
            <li>Email: <a href="mailto:contact@genZstore.com" className="hover:text-blue-600 transition">contact@genZstore.com</a></li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-300" />
      <p className="text-center text-gray-500 text-sm py-6">
        © 2025 genZstore. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
