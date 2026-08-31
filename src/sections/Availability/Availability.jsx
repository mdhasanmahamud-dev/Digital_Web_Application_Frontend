import React from "react";
import { Globe, Clock3, BriefcaseBusiness } from "lucide-react";
import SectionTitle from "../../components/SectionTitle";

const Availability = () => {
  return (
    <section className="bg-secondary py-20 px-6 border-b border-primary ">
      <div className="container-custom">
        {/* Heading */}
        <SectionTitle
          sub="Our Presence"
          heading="Work With Us Easily From Anywhere in the World."
        />

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {/* Card 1 */}
          <div className="bg-surface rounded-3xl p-8 border border-white/10 hover:-translate-y-2 hover:border-accent transition duration-300 shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-primary text-primary flex items-center justify-center mb-6 border border-white/10">
              <Globe className="text-accent" size={32} />
            </div>

            <h3 className="text-2xl font-heading font-bold text-white-custom mb-4">
              Worldwide Online
            </h3>

            <p className="text-gray-400 leading-relaxed font-bangla">
              বিশ্বের ২০টিরও বেশি দেশের ক্লায়েন্টদের সাথে রিমোটভাবে কাজ করছি
              আধুনিক কমিউনিকেশন সিস্টেমের মাধ্যমে।
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-surface rounded-3xl p-8 border border-white/10 hover:-translate-y-2 hover:border-accent transition duration-300 shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-primary text-primary  flex items-center justify-center mb-6 border border-white/10">
              <Clock3 className="text-accent" size={32} />
            </div>

            <h3 className="text-2xl font-heading font-bold text-white-custom mb-4">
              Fast Response
            </h3>

            <p className="text-gray-400 leading-relaxed font-bangla">
              দ্রুত যোগাযোগ এবং কার্যকর প্রজেক্ট আপডেটের মাধ্যমে আপনার কাজকে
              এগিয়ে রাখি।
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-surface rounded-3xl p-8 border border-white/10 hover:-translate-y-2 hover:border-accent transition duration-300 shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-primary text-primary flex items-center justify-center mb-6 border border-white/10">
              <BriefcaseBusiness className="text-accent" size={32} />
            </div>

            <h3 className="text-2xl font-heading font-bold text-white-custom mb-4">
              Remote Freelance
            </h3>

            <p className="text-gray-400 leading-relaxed font-bangla">
              ছোট থেকে বড় সব ধরনের ব্যবসার জন্য ফ্লেক্সিবল এবং প্রফেশনাল সার্ভিস
              প্রদান করি।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Availability;
