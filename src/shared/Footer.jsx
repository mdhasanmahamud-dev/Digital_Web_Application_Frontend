import React from "react";
import DigitalManegmentLogo from "../assets/DigitalManegmentLogo.svg";
const Footer = () => {
  const navItems = [
    { name: "হোম", path: "#home" },
    { name: "আমাদের সম্পর্কে", path: "#about" },
    { name: "সার্ভিস", path: "#services" },
    { name: "প্রজেক্ট", path: "#projects" },
    { name: "যোগাযোগ", path: "#contact" },
  ];
  return (
    <footer className="bg-footer border-t border-[#0b2b63]">
      <div className="container-custom py-16">
        {/* Top Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          {/* Logo & Description */}
          <div className="hidden md:flex">
            <p className="text-gray-400 leading-8 max-w-xs">
              বাংলাদেশের business-গুলোকে <br />
              digital-এ নিয়ে যাওয়াই আমাদের <br />
              mission!
            </p>
          </div>

          {/* Services */}
          <div className="">
            <h3 className="text-white uppercase tracking-[3px] text-sm font-bold mb-6">
              Our Servicess
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-[#F0A010] transition-all duration-300 cursor-pointer">
                Social Media
              </li>

              <li className="hover:text-[#F0A010] transition-all duration-300 cursor-pointer">
                Web Development
              </li>

              <li className="hover:text-[#F0A010] transition-all duration-300 cursor-pointer">
                AI Agent
              </li>

              <li className="hover:text-[#F0A010] transition-all duration-300 cursor-pointer">
                Graphic Design
              </li>

              <li className="hover:text-[#F0A010] transition-all duration-300 cursor-pointer">
                Video Editing
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white uppercase tracking-[3px] text-sm font-bold mb-6">
              Quick Access
            </h3>
            <ul className="space-y-3 text-gray-400">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  className="hover:text-[#F0A010] transition-all duration-300 cursor-pointer"
                >
                  <a href={item.path}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white uppercase tracking-[3px] text-sm font-bold mb-6">
              Contact
            </h3>

            <div className="space-y-4 text-gray-400">
              <p>+880 1947910254</p>

              <p>Rangpur, Bangladesh</p>

              <div className=" items-center gap-2 hidden md:flex">
                <span className="w-2 h-2 rounded-full bg-green-400"></span>

                <span className="text-green-400 font-medium text-center md:text-left">
                  Available Now
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-[#0b2b63] mt-14 pt-8 flex flex-col md:flex-row items-center justify-center">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2025 Digital Management Agency · Made with ♥ in Rangpur,
            Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
