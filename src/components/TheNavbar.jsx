import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="container flex items-center justify-between px-4 md:px-9 lg:px-14 xl:px-20 py-5 lg:py-8 font-Poppins">
        <div className="flex items-center lg:space-x-10">
          <div>
            <img src="/logo.svg" alt="Shortly" className="w-28 lg:w-40" />
          </div>
        </div>

        <div className="md:hidden absolute right-3">
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            type="button"
            className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg transition-all duration-300 ${
              isOpen ? "transform rotate-90" : ""
            }`}
            aria-controls="dropdown"
            aria-expanded={isOpen}
            onClick={toggleMenu}
          >
            {isOpen ? (
              <svg
                className="w-7 h-7"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            )}
          </button>
        </div>

        <div
          id="dropdown"
          className={`fixed md:relative flex-1 md:ml-8 lg:ml-14 xl:ml-20 top-16 md:top-0.5 left-6 md:left-0 w-96 md:w-auto h-72 md:h-auto px-5 sm:px-0 py-8 sm:py-0 bg-DarkViolet md:bg-transparent z-50 transform ${
            isOpen
              ? "opacity-100 translate-y-0 block"
              : "opacity-0 -translate-y-5 hidden"
          }  transition-all duration-300 ease-in-out rounded-lg md:transform-none md:opacity-100 md:translate-y-0 md:flex md:items-center md:space-x-10`}
        >
          <div className="flex flex-col md:flex-row divide-y divide-GreyishViolet divide-opacity-40 md:divide-y-0 md:items-center md:justify-between h-full md:h-auto w-full md:w-auto">
            <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-3 lg:space-x-5 font-semibold text-Grey hover:cursor-pointer">
              <li className="hover:text-black" onClick={() => setIsOpen(false)}>
                Features
              </li>
              <li className="hover:text-black" onClick={() => setIsOpen(false)}>
                Blog
              </li>
              <li className="hover:text-black" onClick={() => setIsOpen(false)}>
                Resources
              </li>
            </ul>
            <div className="flex flex-col md:hidden sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-3 mt-5 sm:mt-0">
              <button
                className="mt-4 font-semibold text-Grey hover:text-black"
                onClick={() => setIsOpen(false)}
              >
                Login
              </button>
              <button
                className="font-semibold bg-Cyan text-white px-5 py-1.5 rounded-full hover:bg-cyan-200 w-full"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-10">
          <button className="font-semibold text-Grey hover:text-black">
            Login
          </button>
          <button className="font-semibold bg-Cyan text-white px-5 py-1.5 rounded-full hover:bg-cyan-200">
            Sign Up
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
