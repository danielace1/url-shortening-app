const HomePage = () => {
  return (
    <div className="container flex items-center justify-between py-20">
      <div className="w-1/2 ">
        <h1 className="font-bold text-6xl mb-3">
          More than just <br /> shorter links
        </h1>
        <p className="text-GreyishViolet font-semibold mb-10">
          Build your brand&apos;s recognition and get detailed <br /> insights
          on how your links are performing.
        </p>

        <button className="px-9 py-3 text-white text-lg bg-Cyan hover:bg-cyan-200 font-semibold rounded-full">
          Get Started
        </button>
      </div>

      <div className="">
        <img src="/illustration-working.svg" alt="illustration working" />
      </div>
    </div>
  );
};

export default HomePage;
