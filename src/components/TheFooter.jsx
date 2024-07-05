const Footer = () => {
  return (
    <footer className="py-16 bg-VeryDarkViolet">
      <div className="container px-20 flex space-x-48">
        <div className="w-1/6">
          <img src="/logo-white.svg" alt="shortly" className="text-white" />
        </div>

        <div className="grid grid-cols-4 gap-x-20">
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

          <div className="flex space-x-4">
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
