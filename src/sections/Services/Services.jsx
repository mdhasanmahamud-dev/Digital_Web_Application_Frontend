import React from "react";
import {
  Palette,
  Code2,
  Layers,
  Video,
  GraduationCap,
  Headphones,
  ArrowRight,
  Clapperboard,
} from "lucide-react";
import SectionTitle from "../../components/SectionTitle";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Mobile & web interfaces that delight and convert.",
  },
  {
    icon: Code2,
    title: "Web Application",
    desc: "React, Next.js, Node.js — modern, scalable apps.",
  },
  {
    icon: Video,
    title: "Video Editing",
    desc: "YouTube, ads, and social-first video content.",
  },
  {
    icon: GraduationCap,
    title: "Coaching & Training",
    desc: "Hands-on Web Dev & UI/UX programs, online or offline.",
  },
  {
    icon: Headphones,
    title: "Digital Solutions & Support",
    desc: "Ongoing maintenance, optimization and growth.",
  },
  {
    icon: Clapperboard,
    title: "Motion Graphics",
    desc: "Animated visuals, promo videos, reels and engaging motion content.",
  },
];

const Servicess = () => {
  return (
    <section
      id="services"
      className="py-18 md:py-20 bg-dark relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary  blur-3xl rounded-full " />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary blur-3xl rounded-full hidden md:block" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div>
          <SectionTitle
            sub="Our Services"
            heading={
              <span className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Modern <span className="text-primary">Digital Solutions</span>{" "}
                for Your Business
              </span>
            }
          />
        </div>
        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="font-heading group relative bg-navy border border-primary rounded-3xl p-8 h hover:border-accent transition-all duration-500 overflow-hidden"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-slate-900 text-primary flex items-center justify-center mb-6 border border-primary group-hover:border-accent transition-all duration-500">
                  <Icon className="w-7 h-7 text-accent group-hover:scale-110 transition-transform duration-500" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold font-heading text-white-soft mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-8">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Servicess;
