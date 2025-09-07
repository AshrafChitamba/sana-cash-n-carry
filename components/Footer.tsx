export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white">
      <div className="bg-primary py-10 px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:justify-items-center gap-4 max-w-[93rem] mx-auto">
          <div>
            <img src="/logo.png" alt="SANA_LOGO" className="object-contain" />
            <div className="mt-3">
              <h4 className="font-semibold text-2xl mb-3">
                Sona Cash &apos;n&apos; Carry Retail <br /> Shopping at retail
                price
              </h4>
              <p className="text-sm">Malawi leading supermarket</p>
            </div>
          </div>
          <div className="sm:justify-self-center">
            <h4 className="font-semibold text-xl mb-2">Quick Links</h4>
            <ul className="flex flex-col items-start gap-2 text-[#FCFCFC]">
              <li>
                <a href="#home" className="text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#categories" className="text-sm">
                  Our Categories
                </a>
              </li>
              <li>
                <a href="#history" className="text-sm">
                  Our History
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#stores" className="text-sm">
                  Find a store
                </a>
              </li>
            </ul>
          </div>
          <div className="md:justify-self-center">
            <h4 className="font-semibold text-xl mb-2">Get In Touch</h4>
            <ul className="flex flex-col items-start gap-2 text-[#FCFCFC]">
              <li>
                <a href="tel:" className="text-sm">
                  (+265) 988 88 88 20
                </a>
              </li>
              <li>
                <a href="#" className="text-sm">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-sm">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          <div className="sm:justify-self-center md:justify-self-start">
            <h4 className="font-semibold text-xl mb-2">Legal</h4>
            <ul className="flex flex-col items-start gap-2 text-[#FCFCFC]">
              <li>
                <a href="#" className="text-sm">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm">
                  Terms of service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <small className="block bg-[#013334] py-3.5 px-8 text-center">
        &copy; {currentYear} Sana Cash &apos;n&apos; Carry. All right reserved
      </small>
    </footer>
  );
};
