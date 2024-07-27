import { useState } from "react";

const Links = () => {
  const [copy, setCopy] = useState(false);
  const [clicked, setClicked] = useState(false);

  const clipboard = () => {
    navigator.clipboard.writeText("https://www.frontendmentor.io/challenges/");
    setCopy(true);
    setClicked(true);
    setTimeout(() => setCopy("Copy"), 2000);
  };

  return (
    <div className="mx-5 md:mx-10 lg:mx-20 xl:mx-40 2xl:mx-72 mt-14 md:mt-3 xl:mt-7 bg-white p-4 lg:px-5 lg:py-4 rounded-md">
      <div className="flex-col lg:flex-row lg:flex justify-between items-center">
        <div className="">
          <h5 className="font-semibold">
            https://www.frontendmentor.io/challen
          </h5>
        </div>
        <div className="mt-3.5 md:mt-0 grid gap-y-3 md:gap-y-0 md:flex md:justify-between items-center md:space-x-3 lg:space-x-5">
          <div>
            <h5 className="font-semibold text-Cyan">
              https://www.frontendmentor.io/challenges/
            </h5>
          </div>
          <div>
            <button
              onClick={clipboard}
              className={`text-white w-full ${
                clicked ? "bg-DarkViolet" : copy ? "bg-DarkViolet" : "bg-Cyan"
              } font-semibold px-7 py-1.5 rounded ${
                clicked ? "" : "hover:bg-cyan-300 w-full"
              }`}
            >
              {copy ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
