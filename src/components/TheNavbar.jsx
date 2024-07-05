const Navbar = () => {
  return (
    <nav>
      <div>
        <div>
          <img src="/logo.svg" alt="Shortly" />
        </div>
        <ul>
          <li>Features</li>
          <li>Blog</li>
          <li>Resources</li>
        </ul>
      </div>

      <div>
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
