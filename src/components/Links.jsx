import { useState } from "react";
import { useUrls } from "../useContext/useContext";

const Links = () => {
  const { urls } = useUrls();
  const [copyStates, setCopyStates] = useState({});

  const clipboard = (url, index) => {
    navigator.clipboard.writeText(url);
    setCopyStates((prevStates) => ({
      ...prevStates,
      [index]: true,
    }));
    setTimeout(() => {
      setCopyStates((prevStates) => ({
        ...prevStates,
        [index]: false,
      }));
    }, 2000);
  };

  return (
    <div>
      {urls.length > 0 ? (
        urls.map((link, index) => (
          <div
            key={index}
            className="mx-5 md:mx-10 lg:mx-20 xl:mx-40 2xl:mx-72 mt-14 md:mt-3 xl:mt-7 bg-white p-4 lg:px-5 lg:py-4 rounded-md"
          >
            <div className="overflow-x-auto lg:flex-row lg:flex md:justify-between md:items-center">
              <div className="">
                <h5 className="font-semibold">{link.originalUrl}</h5>
              </div>
              <div className="mt-3.5 md:mt-2 lg:mt-0 grid gap-y-3 md:gap-y-0 md:flex md:justify-between items-center md:space-x-3 lg:space-x-5">
                <div>
                  <h5 className="font-semibold text-Cyan">
                    {link.shortenedUrl}
                  </h5>
                </div>
                <div>
                  <button
                    onClick={() => clipboard(link.shortenedUrl, index)}
                    className={`text-white w-full ${
                      copyStates[index] ? "bg-DarkViolet" : "bg-Cyan"
                    } font-semibold px-7 py-1.5 rounded ${
                      copyStates[index] ? "" : "hover:bg-cyan-300 w-full"
                    }`}
                  >
                    {copyStates[index] ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Links;
