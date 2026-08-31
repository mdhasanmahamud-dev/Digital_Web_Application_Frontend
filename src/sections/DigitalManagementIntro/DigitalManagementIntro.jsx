import React from "react";
import { Trophy, Bot, MapPin, Lock } from "lucide-react";
import SectionTitle from "../../components/SectionTitle";

const DigitalManagementIntro = () => {
  const features = [
    {
      title: "Proven Results",
      desc: "Promise করি না, results দেখাই। প্রতিটি project-এ measurable ROI নিশ্চিত।",
      icon: <Trophy className="w-8 h-8 text-accent" />,
    },
    {
      title: "AI-Powered Agency",
      desc: "বাংলাদেশে আমরাই প্রথম AI Agent offer করা agency। Technology-তে সবার আগে।",
      icon: <Bot className="w-8 h-8 text-accent" />,
    },
    {
      title: "Local Market Expert",
      desc: "Bangladeshi user কীভাবে ভাবে, কীভাবে কেনে — আমরা জানি। Local insight = better ROI।",
      icon: <MapPin className="w-8 h-8 text-accent" />,
    },
    {
      title: "Fully Transparent",
      desc: "কোনো hidden charge নেই। কাজ শুরুর আগেই সব cost, timeline, deliverable clear।",
      icon: <Lock className="w-8 h-8 text-accent" />,
    },
  ];

  return (
    <section className="bg-primary py-18 md:py-24 px-6 font-bangla border-y border-primary">
      <div className="max-w-7xl mx-auto text-center">
        <SectionTitle
          sub="Why Trust Us"
          heading={
            <span>
              Why We Are <span className="text-primary">Different</span>
            </span>
          }
        />
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-card-secondary  border border-white/10 p-8 rounded-xl text-left hover:border-primary transition-all duration-300 group"
            >
              {/* Icon Container */}
              <div className="mb-6 inline-block text-primary p-3 rounded-lg bg-white/5 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-white-soft text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalManagementIntro;
