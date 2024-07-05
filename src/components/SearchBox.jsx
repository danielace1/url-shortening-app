const SearchBox = () => {
  return (
    <div className="mx-72 bg-[url('/bg-shorten-desktop.svg')] bg-no-repeat bg-cover rounded-lg">
      <div className="bg-DarkViolet bg-opacity-80 px-12 py-10 rounded-lg">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Shorten a link here..."
            className="outline-none w-5/6 px-5 py-2.5 font-semibold rounded-md focus:border focus:border-GreyishViolet"
          />
          <button className="text-white w-1/6 px-6 py-2.5 bg-Cyan hover:bg-cyan-200 font-bold text-lg rounded-md">
            Shorten It!
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
