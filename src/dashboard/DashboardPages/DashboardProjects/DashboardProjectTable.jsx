import React, { useState } from "react";
import { Trash2, Eye, X, Edit, Star } from "lucide-react";
import { useProject } from "../../../context/ProjectProvider";
import ReactLoaderSpiner from "../../../components/ReactLoaderSpiner";
import NotFound from "../../../components/NotFound";
import { NavLink } from "react-router";

const DashboardProjectTable = () => {
  const { projectLoading, projects, deleteProject, makeFeatured } =
    useProject();
  if (projectLoading) return <ReactLoaderSpiner />;

  if (!projects || projects.length === 0)
    return (
      <NotFound
        title="No Projects Found"
        description="There are currently no projects available."
      />
    );

  // Handle Delete Project
  const handleDeleteProject = async (id) => {
    try {
      await deleteProject(id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFeaturedProject = async (id) => {
    await makeFeatured(id);
  };

  return (
    <div>
      <div className="bg-card-secondary border border-primary rounded-3xl p-5 overflow-x-auto">
        <table className="w-full min-w-175 border-collapse">
          <thead>
            <tr className="bg-card-primary text-left">
              <th className="px-5 py-4 text-primary font-semibold rounded-l-xl">
                Project
              </th>
              <th className="px-5 py-4 text-primary font-semibold">Category</th>
              <th className="px-5 py-4 text-primary font-semibold text-center rounded-r-xl">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-blue-900">
            {projects.map((project, index) => (
              <tr
                key={project._id}
                className="bg-card-hover-secondary transition-all duration-300"
              >
                {/* Project */}
                <td className="px-5 py-4 text-white">
                  <div className="flex items-center gap-4">
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-sm font-bold text-primary">
                      {index + 1}
                    </span>

                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-14 h-14 rounded-xl object-cover border border-primary"
                    />

                    <div>
                      <h3 className="font-semibold text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </td>
                {/* Category */}
                <td className="px-5 py-4 text-white-soft">{project.tag}</td>
                {/* Action */}
                <td className="px-5 py-4">
                  <div className="flex items-center justify-center gap-3">
                    {/* View */}
                    <NavLink
                      to={`/dashboard/editProject/${project._id}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 transition-all duration-300"
                    >
                      <Edit size={18} />
                      Edit
                    </NavLink>
                    {/* Featured */}
                    <button
                      onClick={() => handleFeaturedProject(project._id)}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer ${
                        project.featured
                          ? "bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-400"
                          : "bg-gray-500/10 hover:bg-gray-500/20 text-gray-400"
                      }`}
                    >
                      <Star
                        size={18}
                        fill={project.featured ? "currentColor" : "none"}
                      />

                      {project.featured ? "Featured" : "Featured"}
                    </button>
                    {/* Delete */}
                    <button
                      onClick={() => handleDeleteProject(project._id)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-all duration-300 cursor-pointer"
                    >
                      <Trash2 size={18} />
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardProjectTable;
