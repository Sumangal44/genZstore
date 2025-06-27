const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex items-center gap-3 mb-4">
      <p className="text-gray-500 text-sm sm:text-base">
        {text1}{" "}
        <span className="text-gray-900 font-semibold tracking-wide">
          {text2}
        </span>
      </p>
      <span className="block w-12 h-1 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-full"></span>
    </div>
  );
};

export default Title;
