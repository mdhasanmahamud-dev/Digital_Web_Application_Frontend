import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
// import hero from "../../assets/hero-bg.jpg";
import hero from "../../assets/hero-bg2.jpg";
import CommonContactButton from "../../components/CommonContactButton";
const Hero = () => {
  const features = [
    "No Hidden Charge",
    "24/7 Support",
    "Money-back Guarantee",
    "বাংলায় সাপোর্ট",
  ];

  const stats = [
    {
      value: "50",
      label: "Happy Clients",
      icon: "+",
    },
    {
      value: "120",
      label: "Projects Completed",
      icon: "+",
    },
    {
      value: "3x",
      label: "Average Growth",
      icon: "+",
    },
    {
      value: "4.9",
      label: "Client Rating",
      icon: "★",
    },
  ];
  return (
    <section className="relative min-h-150 w-full bg-[linear-gradient(135deg,#003060,#000000)] flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Top Badge */}
      <div className="mb-8 border border-primary bg-black-custom/50 rounded-full px-4 py-1 flex items-center gap-2 backdrop-blur-sm">
        <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>

        <span className="text-white-soft text-xs md:text-sm font-medium tracking-widest uppercase">
          Rangpur • Bangladesh • Est. 2023
        </span>
      </div>

      {/* Main Heading */}
      <h1 className="max-w-4xl text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
        <span className="text-white block mb-2">আপনার Business-কে</span>

        <span className="text-primary block mb-2">
          <span className="font-heading">Digitally Dominate</span> করাই
        </span>

        <span className="text-white-custom">আমাদের কাজ</span>
      </h1>

      {/* Services */}
      <div className="mt-8 text-white-soft text-sm md:text-lg flex flex-wrap justify-center gap-3 font-light">
        <span>Web Dev</span>•<span>Video Editing</span> •
        <span>Graphis Desing</span> •<span>AI Agent</span> •
        <span className="text-white-custom/50">— সব এক ছাদের নিচে।</span>
      </div>

      {/* Social Proof */}
      <p className="mt-4 text-white-custom text-sm md:text-base font-medium">
        <span className="text-accent">৫০+ satisfied client</span> আমাদের trust
        করে।
      </p>

      {/* CTA Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
        <CommonContactButton text="Free Consultation নিন" ref="#contact" />
        <button className="border border-accent text-accent hover:bg-accent hover:text-black-custom transition-all py-3 px-8 rounded-lg flex items-center gap-2 text-base group">
          Portfolio দেখুন
          <ArrowRight
            size={18}
            className="group-hover:translate-x-1 transition-transform"
          />
        </button>
      </div>

      {/* Features */}
      <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm md:text-base text-white-custom/80">
        {features.map((item, index) => (
          <div
            key={index}
            className="border border-primary bg-black-custom/40 px-4 py-2 rounded-full backdrop-blur-sm"
          >
            ✓ {item}
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="my-12 bg-card-primary  border-primary rounded-sm  backdrop-blur-sm hover:border-accent transition-all duration-300">
        <div className=" grid grid-cols-2 md:grid-cols-4 text-center">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`bg-card-hover-primary py-5 px-4 transition-all duration-300 ease-in-out ${
                  index !== stats.length - 1 ? "border-r border-primary" : ""
                }`}
              >
                <div className="flex items-center justify-center md:text-5xl text-2xl gap-0.5">
                  <h2 className="font-bold font-heading">{stat.value}</h2>
                  <span className="text-primary font-heading">{stat.icon}</span>
                </div>
                <p className="font-heading text-white-soft">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
