import React from "react";

const SectionTitle = ({ sub, heading }) => {
  return (
    <div className="text-center mb-10 max-w-3xl md:max-w-4xl mx-auto ">
      {/* Subtitle */}
      <p className="font-heading text-primary tracking-[0.2em] text-xs uppercase mb-4 font-bold">
        {sub}
      </p>

      {/* Main Heading */}
      <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-16">
        {heading}
      </h2>
    </div>
  );
};

export default SectionTitle;
