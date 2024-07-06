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
    <div className="mx-40 2xl:mx-72 mt-5 bg-white px-5 py-4  rounded-md">
      <div className="flex justify-between items-center">
        <div className="">
          <h5 className="font-semibold">
            https://www.frontendmentor.io/challen
          </h5>
        </div>
        <div className="flex items-center space-x-5">
          <div>
            <h5 className="font-semibold text-Cyan">
              https://www.frontendmentor.io/challenges/
            </h5>
          </div>
          <div>
            <button
              onClick={clipboard}
              className={`text-white ${
                clicked ? "bg-DarkViolet" : copy ? "bg-DarkViolet" : "bg-Cyan"
              } font-semibold px-7 py-1.5 rounded ${
                clicked ? "" : "hover:bg-cyan-300"
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
