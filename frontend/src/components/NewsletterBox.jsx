
const NewsletterBox = () => {
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        console.log(email);
    }
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
      </p>
      <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center  gap-3  mx-auto my-6 border pl-3">
        <input  className="w-full sm:flex-1 outline-none " type="email" placeholder="Enter your Email" required/>
        <button type="submit" className="bg-zinc-900  text-white text-xs px-10 py-4 cursor-pointer"> Subscribe</button>
      </form>
    </div>
  );
};

export default NewsletterBox;
