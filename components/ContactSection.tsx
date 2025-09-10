export const ContactSection = () => {
  return (
    <section id="contact" className="bg-primary py-10 lg:py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="flex justify-center">
            <img
              src="/logo.png"
              alt="SANA_LOGO"
              className="h-36 w-36 object-contain"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#fff8f0] mb-3 max-w-4xl mx-auto leading-14">
            Leave Us a Message! We&apos;d Love to Hear From You:
          </h2>
          <div className="text-[#fff8f0] text-sm sm:text-base md:text-lg">
            <p>
              Email:
              <a
                href="mailto:customerservice@sanamalawi.com"
                className="inline-block indent-1 text-[#28c878] font-semibold"
              >
                customerservice@sanamalawi.com
              </a>
            </p>
            <p>
              Call:
              <a
                href="tel:+265988888820"
                className="inline-block indent-1 text-[#28c878] font-semibold"
              >
                +265 988 88 88 20
              </a>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-7 mt-5">
            <a
              href="https://whatsapp.com/channel/0029VaIERxoFy72G4SPr5X2P"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#bdff72] text-primary underline uppercase font-semibold py-4 px-8 rounded-full text-sm shadow-lg hover:shadow-xl border border-primary"
            >
              Join our Community
            </a>
            <a
              href="https://web.facebook.com/sanacashncarrymalawi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#bdff72] text-primary underline uppercase font-semibold py-4 px-8 rounded-full text-sm shadow-lg hover:shadow-xl border border-primary"
            >
              Follow us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
