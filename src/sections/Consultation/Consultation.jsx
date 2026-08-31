import React from "react";
import CommonContactButton from "../../components/CommonContactButton";

const Consultation = () => {
  return (
    <section className="bg-black/80 py-24 px-6 font-bangla text-white border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          আজই শুরু করুন, <br />
          <span className="text-primary font-heading italic">
            Free Consultation
          </span>{" "}
          নিন
        </h2>

        {/* Subtext */}
        <p className="text-gray-400 text-sm md:text-base mb-10 max-w-2xl mx-auto font-light">
          কোনো commitment নেই। শুধু একটি conversation — আমরা বাকিটা করব।
        </p>

        {/* CTA Button */}
        <CommonContactButton text="এখনই Contact করুন" ref="#contact" />
      </div>
    </section>
  );
};

export default Consultation;
