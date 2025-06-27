import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <section className="flex flex-col-reverse sm:flex-row items-center justify-between bg-white border border-gray-300 rounded-xl overflow-hidden shadow-md">
      
      {/* Hero Left Side */}
      <div className="w-full sm:w-1/2 px-6 sm:px-12 py-10 flex flex-col justify-center text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start gap-2 mb-4">
          <div className="w-10 h-[2px] bg-gray-800"></div>
          <span className="text-gray-700 text-sm md:text-base font-medium tracking-wide">
            OUR BESTSELLERS
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug">
          Latest Arrivals
        </h1>

        <div className="flex items-center justify-center sm:justify-start gap-2 mt-6 group cursor-pointer">
          <span className="text-base md:text-lg font-semibold text-gray-800 transition group-hover:text-black">
            Shop Now
          </span>
          <div className="w-8 md:w-11 h-[1px] bg-gray-800 transition-all duration-300 group-hover:w-14"></div>
        </div>
      </div>

      {/* Hero Right Side */}
      <div className="w-full sm:w-1/2">
        <img
          src={assets.hero_img}
          alt="Hero"
          className="w-full h-auto object-cover transition duration-500 hover:scale-105"
        />
      </div>
    </section>
  );
};

export default Hero;
