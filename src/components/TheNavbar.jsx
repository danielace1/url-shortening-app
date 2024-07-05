const Navbar = () => {
  return (
    <nav className="container flex justify-between items-center px-20 py-8 font-Poppins">
      <div className="flex items-center space-x-10">
        <div>
          <img src="/logo.svg" alt="Shortly" />
        </div>
        <ul className="flex items-center space-x-5 font-semibold text-Grey hover:cursor-pointer">
          <li className="hover:text-black">Features</li>
          <li className="hover:text-black">Blog</li>
          <li className="hover:text-black">Resources</li>
        </ul>
      </div>

      <div className="flex items-center space-x-10">
        <button className="font-semibold text-Grey hover:text-black">
          Login
        </button>
        <button className="font-semibold bg-Cyan text-white px-5 py-1.5 rounded-full hover:bg-cyan-200">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
