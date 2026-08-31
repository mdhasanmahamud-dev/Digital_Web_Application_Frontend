import SectionTitle from "../../components/SectionTitle";
import { motion } from "framer-motion";
import { NavLink } from "react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import p1 from "../../assets/portfolio-1.jpg";
import p2 from "../../assets/portfolio-2.jpg";
import p3 from "../../assets/portfolio-3.jpg";
import { useProject } from "../../context/ProjectProvider";
import FeaturedCards from "./FeaturedCards";

const Featured = () => {
  const { featuredProjects, featuredLoading } = useProject();
  const projects = [
    {
      img: p1,
      title: "FinTrack Mobile",
      tag: "UI/UX Design",
      desc: "Personal finance dashboard with delightful microinteractions.",
    },
    {
      img: p2,
      title: "Pulse Analytics",
      tag: "Web Application",
      desc: "Real-time analytics platform built with React and Node.",
    },
    {
      img: p3,
      title: "Visionary Cuts",
      tag: "Video Editing",
      desc: "Color-graded campaign edits for a global creator brand.",
    },
  ];
  return (
    <section className="py-20 md:py-24 bg-primary">
      <div>
        <SectionTitle
          sub="Featured Projects"
          heading="Projects We Are Proud Of"
        />
      </div>
      <FeaturedCards
        projects={featuredProjects}
        featuredLoading={featuredLoading}
      />
      {/* View More Button */}
      {featuredProjects.length >= 3 && (
        <div className="flex items-center justify-center mt-14">
          <NavLink
            to="/projects"
            className="group inline-flex items-center gap-3 px-7 py-4 rounded-md bg-accent text-black font-semibold hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_10px_40px_rgba(255,255,255,0.08)]"
          >
            View All Projects
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </NavLink>
        </div>
      )}
    </section>
  );
};

export default Featured;
