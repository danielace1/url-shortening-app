import Links from "../components/Links";
import SearchBox from "../components/SearchBox";

const HomePage = () => {
  return (
    <div>
      {/* home */}
      <div className="container px-5 md:px-9 lg:px-14 xl:px-20 pb-36 md:pb-48">
        <div className="relative mt-10 xl:mt-12 flex flex-col-reverse md:flex-row items-center justify-between lg:h-[50vh]">
          <div className="mt-14 md:mt-0 lg:w-1/2 text-center md:text-left">
            <h1 className="font-bold text-4xl lg:text-6xl mb-3">
              More than just <br /> shorter links
            </h1>
            <p className="text-GreyishViolet font-semibold mb-8 text-balance">
              Build your brand&apos;s recognition and get detailed <br />
              insights on how your links are performing.
            </p>

            <button className="px-10 md:px-6 lg:px-9 py-2 lg:py-2.5 text-white lg:text-lg bg-Cyan hover:bg-cyan-200 font-semibold rounded-full">
              Get Started
            </button>
          </div>

          <div className="md:absolute md:w-[380px] md:-right-10 lg:w-[550px] lg:-right-14 xl:-right-20">
            <img src="/illustration-working.svg" alt="illustration working" />
          </div>
        </div>
      </div>

      {/* Advanced statistics  */}
      <div className="relative bg-gray-100 pt-16 pb-32">
        <div className="flex flex-col justify-center items-center">
          {/* Search box */}
          <div className="container absolute -top-16 w-full">
            <SearchBox />
          </div>

          <div className="container space-y-3">
            <Links />
          </div>
        </div>

        <div className="px-2.5 mt-14 xl:mt-16 text-nowrap md:text-wrap text-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-2">
            Advanced Statistics
          </h1>
          <p className="text-GreyishViolet font-semibold">
            Track how your links are performing across the web with <br /> our
            advanced statistics dashboard.
          </p>
        </div>

        {/* Cards */}
        <div className="relative container px-9 lg:px-14 xl:px-20 mt-20 md:mt-14 md:flex md:gap-x-10">
          {/* Stick */}
          <span className="absolute top-0 left-1/2 transform -translate-x-1/2 md:top-40 md:left-auto md:translate-x-0 md:transform-none w-2 h-full bg-Cyan -z-0 md:h-2 md:w-[calc(100%-33%)]"></span>

          <div className="relative px-7 xl:px-10 pt-14 pb-10 xl:py-16 h-auto md:h-[375px] lg:h-72 xl:h-60 bg-white rounded z-10">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 md:left-20 bg-DarkViolet p-5 rounded-full">
              <img
                src="/icon-brand-recognition.svg"
                alt="brand recognition"
                className=""
              />
            </div>
            <div className="mt-4">
              <h1 className="font-bold text-xl lg:text-2xl mb-2">
                Brand Recognition
              </h1>
              <p className="font-semibold text-GreyishViolet">
                Boost your brand recognition with each click. Generic links
                don&apos;t mean a thing Branded links help instill confidence in
                your content.
              </p>
            </div>
          </div>

          <div className="relative mt-20 md:mt-14 px-7 xl:px-10 pt-14 pb-10 xl:py-16 h-auto md:h-[375px] lg:h-72 xl:h-60 bg-white rounded z-10">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 md:left-20 bg-DarkViolet p-5 rounded-full">
              <img
                src="/icon-detailed-records.svg"
                alt="brand recognition"
                className="w-full"
              />
            </div>
            <div className="mt-4">
              <h1 className="font-bold text-xl lg:text-2xl mb-2">
                Detailed Records
              </h1>
              <p className="font-semibold text-GreyishViolet">
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
          </div>

          <div className="relative mt-20 md:mt-28 px-7 xl:px-10 pt-14 pb-10 xl:py-16 h-auto md:h-[375px] lg:h-72 xl:h-60 bg-white rounded z-10">
            <div className="absolute -top-10  left-1/2 transform -translate-x-1/2 md:left-20 bg-DarkViolet p-5 rounded-full">
              <img
                src="/icon-fully-customizable.svg"
                alt="brand recognition"
                className=""
              />
            </div>
            <div className="mt-4">
              <h1 className="font-bold text-xl lg:text-2xl mb-2">
                Fully Customizable
              </h1>
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
          <h1 className="text-3xl lg:text-4xl text-white font-bold mb-5">
            Boost your links today
          </h1>
          <button className="px-10 md:px-6 lg:px-8 py-2 lg:py-2.5 text-white lg:text-lg bg-Cyan hover:bg-cyan-200 font-semibold rounded-full">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
