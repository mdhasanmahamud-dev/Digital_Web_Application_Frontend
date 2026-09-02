import React from "react";
import { useTeam } from "../../context/TeamMembersProvider";

const About = () => {
  const { team } = useTeam();
  console.log(team);
  return (
    <section className="bg-primary text-white py-20 px-6 md:px-20 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <p className="text-sm tracking-widest text-gray-400 font-semibold mb-2 uppercase">
            About Us
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight font-heading">
            Rangpur থেকে, <br />
            <span className="text-primary font-heading">
              Bangladesh-এর জন্য
            </span>
          </h2>
          <p className="mt-6 text-gray-300 max-w-lg leading-relaxed">
            আমরা বিশ্বাস করি প্রতিটি Bangladeshi business-এর একটি strong digital
            presence পাওয়ার হক আছে।
          </p>
        </div>

        {/* Quote Section */}
        <div className="bg-[#0a1a3a] border border-[#1f3151] rounded-lg p-8 mb-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-orange-500"></div>
          <p className="italic text-lg md:text-xl text-gray-200">
            "আমরা শুধু একটি agency না — আমরা আপনার digital growth partner। আপনার
            success-ই আমাদের portfolio।"
          </p>
          <p className="mt-4 text-xs font-bold text-orange-500 tracking-widest uppercase">
            — Founder, Digital Management Agency
          </p>
        </div>
        {/* Team Section */}
        <div>
          <p className="text-sm tracking-widest text-gray-400 font-semibold mb-10 uppercase">
            The Team
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team?.map((member) => (
              <div
                key={member._id}
                className="bg-[#0a1a3a] border border-[#1f3151] rounded-xl p-6 text-center"
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-16 h-16 rounded-full object-cover mx-auto mb-4"
                />

                <h4 className="font-bold text-lg">{member.name}</h4>

                <p className="text-[10px] text-orange-500 font-bold mb-3">
                  {member.role}
                </p>

                <p className="text-xs text-gray-400">
                  Experience: {member.experience}
                </p>

                <div className="mt-3 flex flex-wrap justify-center gap-2">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs bg-[#1f3151] rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
