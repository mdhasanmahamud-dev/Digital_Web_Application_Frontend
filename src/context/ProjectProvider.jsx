import React, { createContext, useContext, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/axiosInstance";
import { showError, showSuccess } from "../utils/showAlert";

export const ProjectContext = createContext(null);

const ProjectProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  // =========================
  // ADD A NEW PROJECT
  // =========================
  const addNewProject = async (projectData) => {
    try {
      setLoading(true);
      const res = await axiosInstance.post("/create-project", projectData);
      console.log(res);
      //Success Message
      showSuccess(res.data.message);
      refetch();
      refetchCount();
      return res.data;
    } catch (error) {
      showError(error?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // GET ALL PROJECT
  // =========================
  const {
    data: projects = [],
    isLoading: projectLoading,
    refetch,
  } = useQuery({
    queryKey: ["projects"],

    queryFn: async () => {
      const res = await axiosInstance.get("/all-projects");
      return res.data.data;
    },
  });
  // =========================
  // GET ALL FEATURED PROJECT
  // =========================
  const {
    data: featuredProjects = [],
    isLoading: featuredLoading,
    refetch:featuredRefetch,
  } = useQuery({
    queryKey: ["featuredProjects"],

    queryFn: async () => {
      const res = await axiosInstance.get("/featured-project");
      return res.data.data;
    },
  });

  // =========================
  // GET ALL PROJECT count
  // =========================
  const {
    data: projectsCount = [],
    isLoading: projectCountLoading,
    refetch: refetchCount,
  } = useQuery({
    queryKey: ["projectsCount"],

    queryFn: async () => {
      const res = await axiosInstance.get("/all-project-count");
      return res.data.totalProjects;
    },
  });

  // =========================
  // DELETE A PROJECT
  // =========================
  const deleteProject = async (id) => {
    setLoading(true);
    try {
      const res = await axiosInstance.delete(`/delete-project/${id}`);
      showSuccess(res.data.message);
      refetch();
    } catch (error) {
      showError(error?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // UPDATE PROJECT
  // =========================
  const updateProject = async (id, data) => {
    try {
      setLoading(true);
      const res = await axiosInstance.patch(`/update-project/${id}`, data);
      console.log(res);
      showSuccess(res.data.message);
      refetch();
      return res.data;
    } catch (error) {
      showError(error?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // MAKE PROJECT FEATURED
  // =========================
  const makeFeatured = async (id) => {
    try {
      const res = await axiosInstance.patch(`/make-featured/${id}`);

      if (res?.data?.success) {
        showSuccess(res.data.message);
        refetch();
        featuredRefetch()
      }
    } catch (error) {
      console.log(error);
      showError(
        error?.response?.data?.message || "Failed to make featured project",
      );
    }
  };

  const projectInfo = {
    //---------State------------//
    loading,
    featuredLoading,
    //--/------Data-------------//
    projects,
    projectsCount,
    featuredProjects,
    //---------Function---------//
    addNewProject,
    deleteProject,
    updateProject,
    makeFeatured,
  };

  return (
    <ProjectContext.Provider value={projectInfo}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectProvider;

// Use Project Coustom Hook
export const useProject = () => {
  return useContext(ProjectContext);
};
