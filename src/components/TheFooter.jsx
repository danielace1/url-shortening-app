const Footer = () => {
  return (
    <footer className="py-12 lg:py-16 bg-VeryDarkViolet">
      <div className="container px-9 lg:px-14 xl:px-20 lg:flex lg:space-x-32">
        <div className="w-28 md:w-1/6 mx-auto md:mx-0">
          <img src="/logo-white.svg" alt="shortly" className="text-white" />
        </div>

        <div className="mt-8 md:mt-3 lg:mt-0 grid grid-cols-1 md:grid-cols-4 gap-y-8 md:gap-y-0 md:gap-x-20 text-center md:text-left">
          <div>
            <h1 className="font-bold text-white mb-3">Features</h1>
            <ul className="font-semibold text-Grey space-y-1.5">
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold text-white mb-3">Resources</h1>
            <ul className="font-semibold text-Grey space-y-1.5">
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold text-white mb-3">Company</h1>
            <ul className="font-semibold text-Grey space-y-1.5">
              <li>About</li>
              <li>Our Team</li>
              <li>Career</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="flex justify-center md:justify-start space-x-6 md:space-x-4 hover:cursor-pointer">
            <div>
              <img src="/icon-facebook.svg" alt="facebook" />
            </div>
            <div>
              <img src="/icon-twitter.svg" alt="twitter" />
            </div>{" "}
            <div>
              <img src="/icon-pinterest.svg" alt="pinterest" />
            </div>
            <div>
              <img src="/icon-instagram.svg" alt="instagram" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
