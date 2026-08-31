import React from "react";
import { useProject } from "../../../context/ProjectProvider";
import { NavLink } from "react-router";

const AddProjectButton = () => {
  const { projects } = useProject();
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
        {/* Left Side */}
        <div>
          <p className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary hover:opacity-90 text-white font-medium transition-all duration-300 shadow-lg cursor-pointer">
            Total Projects:
            <span className="text-primary font-semibold ml-1">
              {projects.length}
            </span>
          </p>
        </div>

        {/* Right Side */}
        <NavLink to="/dashboard/addProject" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary hover:opacity-90 text-white font-medium transition-all duration-300 shadow-lg cursor-pointer">
          + Add Project
        </NavLink>
      </div>
    </div>
  );
};

export default AddProjectButton;
