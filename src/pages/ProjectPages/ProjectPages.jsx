import React from "react";
import SectionTitle from "../../components/SectionTitle";
import ProjectPageCard from "./ProjectPageCard";

const ProjectPages = () => {
  return (
    <div className="py-7">
      <SectionTitle sub="আমাদের প্রজেক্ট" heading="আমাদের সেরা কাজগুলো" />
      <ProjectPageCard/>
    </div>
  );
};

export default ProjectPages;
