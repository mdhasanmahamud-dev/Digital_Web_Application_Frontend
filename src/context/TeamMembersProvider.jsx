import React, { createContext, useContext } from "react";
import axiosInstance from "../api/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import { showError, showSuccess } from "../utils/showAlert";

export const TeamContext = createContext(null);

const TeamMembersProvider = ({ children }) => {
  // =========================
  // GET ALL TEAM
  // =========================
  const {
    data: team = [],
    isLoading: teamLoading,
    refetch,
  } = useQuery({
    queryKey: ["team"],
    queryFn: async () => {
      const res = await axiosInstance.get("/team");
      return res.data.data;
    },
  });
  console.log(team);

  // =========================
  // ADD MEMBER
  // =========================
  const addMember = async (memberData) => {
    try {
      const res = await axiosInstance.post("/create-member", memberData);

      if (res.data.success) {
        showSuccess("Team member added successfully");
        refetch();
      }
    } catch (error) {
      showError(error?.response?.data?.message || "Add Member Failed");
    }
  };

  // =========================
  // DELETE MEMBER
  // =========================
  const deleteMember = async (id) => {
    try {
      await axiosInstance.delete(`/team/${id}`);

      showSuccess("Team member deleted successfully");
      refetch();
    } catch (error) {
      showError(error?.response?.data?.message || "Delete Failed");
    }
  };

  const teamInfo = {
    //---------loading--------//
    teamLoading,
    //----------data----------//
    team,
    //--------function--------//
    deleteMember,
    addMember,
  };

  return (
    <TeamContext.Provider value={teamInfo}>{children}</TeamContext.Provider>
  );
};

export default TeamMembersProvider;

export const useTeam = () => {
  return useContext(TeamContext);
};
