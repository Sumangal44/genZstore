import { assets } from "../assets/assets";

const policies = [
  {
    icon: assets.exchange_icon,
    title: "Easy Exchange Policy",
    description: "We offer hassle-free exchange policy",
  },
  {
    icon: assets.quality_icon,
    title: "7 Days Return Policy",
    description: "We provide 7 days return for every order",
  },
  {
    icon: assets.support_img,
    title: "Best Customer Support",
    description: "We provide 24/7 customer support",
  },
];

const OurPolicy = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {policies.map((policy, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition duration-300"
            >
              <img
                src={policy.icon}
                alt={policy.title}
                className="w-14 h-14 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {policy.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{policy.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPolicy;
