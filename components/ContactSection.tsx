export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-primary py-10 lg:py-16 px-4 sm:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="flex justify-center">
            <img
              src="/logo.png"
              alt="SANA_LOGO"
              className="h-36 w-36 object-contain"
            />
          </div>
          <h2 className="text-5xl font-semibold text-[#fff8f0] mb-3 leading-14">
            Leave Us a Message! <br /> We&apos;d Love to Hear From <br /> You:
          </h2>
          <div className="text-[#fff8f0] text-lg">
            <p>
              Email:
              <span className="inline-block indent-1 text-[#28c878] font-semibold">
                customerservice@sanamalawi.com
              </span>
            </p>
            <p>
              Call:
              <span className="inline-block indent-1 text-[#28c878] font-semibold">
                +265 988 88 88 20
              </span>
            </p>
          </div>
          <div className="flex gap-7 justify-center mt-5">
            <a
              href="https://whatsapp.com/channel/0029VaIERxoFy72G4SPr5X2P"
              className="inline-block bg-[#bdff72] text-primary underline uppercase font-semibold py-4 px-8 rounded-full text-sm shadow-lg hover:shadow-xl border border-primary"
            >
              Join our Community
            </a>
            <a
              href="https://web.facebook.com/sanacashncarrymalawi"
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
