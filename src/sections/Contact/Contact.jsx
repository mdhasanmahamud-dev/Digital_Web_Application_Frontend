import React from "react";
import { MessageCircle, Phone, Mail, MapPin, ShieldCheck } from "lucide-react";
import ContactForm from "./ContactForm";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MessageCircle size={20} className="text-accent" />,
      label: "WHATSAPP OR PHONE",
      value: "+880 1947910254",
    },
    {
      icon: <Mail size={20} className="text-accent" />,
      label: "EMAIL",
      value: "hello@digitalmanagement.com.bd",
    },
    {
      icon: <MapPin size={20} className="text-accent" />,
      label: "LOCATION",
      value: "Rangpur City, Bangladesh",
    },
  ];

  const socialLinks = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.77l-.44 2.9h-2.33V22c4.78-.75 8.45-4.91 8.45-9.93z" />
        </svg>
      ),
      link: "#",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5C18.33 4 20 5.67 20 7.75v8.5C20 18.33 18.33 20 16.25 20h-8.5C5.67 20 4 18.33 4 16.25v-8.5C4 5.67 5.67 4 7.75 4zm8.75 1a1.25 1.25 0 1 0 0 2.5A1.25 1.25 0 0 0 16.5 5zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
        </svg>
      ),
      link: "#",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM.5 8h4V24h-4V8zm7 0h3.83v2.16h.05c.53-1 1.83-2.16 3.77-2.16 4.03 0 4.78 2.65 4.78 6.09V24h-4v-7.09c0-1.69-.03-3.87-2.36-3.87-2.36 0-2.72 1.84-2.72 3.75V24h-4V8z" />
        </svg>
      ),
      link: "#",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.4 0 .02 5.38.02 12c0 2.12.56 4.2 1.62 6.04L0 24l6.13-1.6A11.96 11.96 0 0 0 12.04 24c6.62 0 12-5.38 12-12 0-3.2-1.25-6.2-3.52-8.52zM12.04 21.82c-1.8 0-3.57-.48-5.13-1.4l-.37-.22-3.64.95.97-3.55-.24-.37A9.78 9.78 0 0 1 2.22 12c0-5.41 4.41-9.82 9.82-9.82 2.62 0 5.08 1.02 6.93 2.87A9.73 9.73 0 0 1 21.86 12c0 5.41-4.41 9.82-9.82 9.82zm5.39-7.36c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.8-1.67-2.1-.17-.3-.02-.47.13-.62.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.08 4.48.7.3 1.25.48 1.67.62.7.22 1.33.2 1.82.12.56-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
        </svg>
      ),
      link: "#",
    },
  ];

  return (
    <section className="bg-dark py-20 px-6 font-bangla text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div>
          <p className="font-heading text-accent tracking-[0.2em] text-xs uppercase mb-2 font-bold">
            Contact Us
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-tight font-heading">
            আজই শুরু করুন <span className="text-primary italic">Free-তে</span>,
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-10">
          {/* Left */}
          <div className="">
            <h3 className="text-2xl font-bold mb-2 text-primary">
              আমাদের সাথে কথা বলুন
            </h3>
            <p className="text-gray-400 text-sm mb-8">
              শনি-বৃহস্পতি, সকাল ৯টা – রাত ১০টা। WhatsApp-এ সবসময় available।
            </p>
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-dark border border-primary p-4 rounded-xl hover:border-accent/50 hover:bg-primary-dark transition-all cursor-pointer"
                >
                  <div className="bg-black-custom/20 p-3 rounded-lg">
                    {info.icon}
                  </div>

                  <div>
                    <p className="text-[10px] font-heading font-bold tracking-widest text-gray-400 uppercase">
                      {info.label}
                    </p>
                    <p className="text-sm font-semibold">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Guarantee */}
            <div className="mt-6 flex items-start gap-4 bg-primary border border-green-500/20 p-5 rounded-xl">
              <ShieldCheck className="text-green-500 shrink-0" size={24} />

              <div>
                <p className="text-green-500 font-bold text-sm">
                  Money-back Guarantee
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  ৭ দিনের মধ্যে satisfied না হলে ১০০% refund।
                </p>
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="p-3 bg-[#0a1a3a] text-orange-400  hover:text-white hover:-translate-y-1 border border-white/10 rounded-lg hover:border-accent hover:text-accent transition-all duration-300 esein text-lg"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
