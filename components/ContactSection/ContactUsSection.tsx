import { ContactForm } from "./ContactForm";

export const ContactUsSection = () => {
  return (
    <section id="contact" className="bg-white py-10 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-medium text-secondary mb-3">
            Contact Us
          </h2>
          <p>
            We'd love to hear from you. Send us a message and we'll <br />{" "}
            respond as soon as possible.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="hidden md:block w-fulll h-full">
            <img
              src="/contact.jpg"
              alt="contact"
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
