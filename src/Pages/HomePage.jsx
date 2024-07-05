import SearchBox from "../components/SearchBox";

const HomePage = () => {
  return (
    <div>
      {/* home */}
      <div className="container px-20 pb-48">
        <div className="relative mt-12 flex items-center justify-between h-[70vh] xl:h-[60vh]">
          <div className="w-1/2">
            <h1 className="font-bold text-6xl mb-3">
              More than just <br /> shorter links
            </h1>
            <p className="text-GreyishViolet font-semibold mb-8">
              Build your brand&apos;s recognition and get detailed <br />{" "}
              insights on how your links are performing.
            </p>

            <button className="px-9 py-2.5 text-white text-lg bg-Cyan hover:bg-cyan-200 font-semibold rounded-full">
              Get Started
            </button>
          </div>

          <div className="absolute -right-20">
            <img src="/illustration-working.svg" alt="illustration working" />
          </div>
        </div>
      </div>

      {/* Advanced statistics  */}
      <div className="relative bg-gray-100 pt-16 px-20 pb-32">
        <div className="flex justify-center items-center">
          {/* Search box */}
          <div className="container absolute -top-16 w-full">
            <SearchBox />
          </div>
        </div>
        <div className="mt-16 text-center">
          <h1 className="text-4xl font-bold mb-2">Advanced Statistics</h1>
          <p className="text-GreyishViolet font-semibold">
            Track how your links are performing across the web with <br /> our
            advanced statistics dashboard.
          </p>
        </div>

        {/* Cards */}
        <div className="container mt-14 flex gap-x-10">
          <span className="absolute bottom-72 left-[450px] 2xl:left-[910px] w-96 h-2 bg-Cyan"></span>

          <div className="relative px-10 py-16 h-60 bg-white rounded z-10">
            <div className="absolute -top-10 left-6 bg-DarkViolet p-5 rounded-full">
              <img
                src="/icon-brand-recognition.svg"
                alt="brand recognition"
                className=""
              />
            </div>
            <div className="mt-4">
              <h1 className="font-bold text-2xl mb-2">Brand Recognition</h1>
              <p className="font-semibold text-GreyishViolet">
                Boost your brand recognition with each click. Generic links
                don&apos;t mean a thing Branded links help instill confidence in
                your content.
              </p>
            </div>
          </div>

          <div className="relative mt-14 px-10 py-16 h-60 bg-white rounded z-10">
            <div className="absolute -top-10 left-6 bg-DarkViolet p-5 rounded-full">
              <img
                src="/icon-detailed-records.svg"
                alt="brand recognition"
                className=""
              />
            </div>
            <div className="mt-4">
              <h1 className="font-bold text-2xl mb-2">Detailed Records</h1>
              <p className="font-semibold text-GreyishViolet">
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
          </div>

          <span className="absolute bottom-72 right-[450px] 2xl:right-[910px] w-96 h-2 bg-Cyan"></span>

          <div className="relative mt-28 px-10 py-16 h-60 bg-white rounded z-10">
            <div className="absolute -top-10 left-6 bg-DarkViolet p-5 rounded-full">
              <img
                src="/icon-fully-customizable.svg"
                alt="brand recognition"
                className=""
              />
            </div>
            <div className="mt-4">
              <h1 className="font-bold text-2xl mb-2">Fully Customizable</h1>
              <p className="font-semibold text-GreyishViolet">
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Boost your links today */}
      <div className="bg-[url('/bg-boost-desktop.svg')] bg-no-repeat bg-cover">
        <div className="bg-DarkViolet bg-opacity-80 py-20 text-center">
          <h1 className="text-4xl text-white font-bold mb-5">
            Boost your links today
          </h1>
          <button className="px-8 py-2.5 text-white text-lg bg-Cyan hover:bg-cyan-200 font-semibold rounded-full">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
