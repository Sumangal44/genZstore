const NewsletterBox = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    console.log(email);
  };

  return (
    <div className="text-center py-16 px-4 bg-gray-50">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
        Subscribe Now & Get <span className="text-blue-600">20% Off</span>
      </h2>
      <p className="text-sm md:text-base text-gray-500 mt-2 max-w-xl mx-auto">
        Sign up for our newsletter to get the latest updates and exclusive deals.
      </p>

      <form
        onSubmit={onSubmitHandler}
        className="mt-6 max-w-xl mx-auto flex flex-col sm:flex-row items-center gap-3 bg-white border border-gray-300 rounded-xl px-3 py-2 shadow-sm"
      >
        <input
          className="flex-1 w-full px-4 py-3 rounded-md outline text-sm text-gray-700"
          type="email"
          placeholder="Enter your email address"
          required
        />
        <button
          type="submit"
          className="bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium px-8 py-3 rounded-md transition "
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
