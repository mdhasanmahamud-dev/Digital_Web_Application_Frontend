import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/axiosInstance";
import Swal from "sweetalert2";
import { showError, showSuccess } from "../utils/showAlert";

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const cookies = new Cookies();

  // =========================
  // Get User From Token
  // =========================
  useEffect(() => {
    const getMe = async () => {
      try {
        setLoading(true);
        const res = await axiosInstance.get("/me", {
          withCredentials: true,
        });

        setUser(res.data.user);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    getMe();
  }, []);

  // =========================
  // Register User
  // =========================
  const createUser = async (userData) => {
    try {
      setLoading(true);

      const res = await axiosInstance.post(
        "/register",
        userData,
      );

      console.log(res.data);

      if (res.data.success) {
        await refetch()
        showSuccess(res.data.success.message);
        return true;
      }
    } catch (error) {
      showError(error?.response?.data?.message || "Registration Failed");
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // Login User
  // =========================

  const loginUser = async (userData) => {
    try {
      setLoading(true);

      await axios.post("/login", userData, {
        withCredentials: true,
      });

      // login এর পরে user load
      const res = await axios.get("/me", {
        withCredentials: true,
      });
      setUser(res.data.user);
      showSuccess("Login Success");

      return true;
    } catch (error) {
      showError(error?.response?.data?.message || "Login Failed");
      return false;
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // Logout User
  // =========================

  const logoutUser = async () => {
    try {
      await axios.post(
        "/logout",
        {},
        {
          withCredentials: true,
        },
      );

      setUser(null);
      showSuccess("Logout Success");

      return true;
    } catch (error) {
      showError(error?.response?.data?.message || "Logout Failed");

      return false;
    }
  };

  // =========================
  // Fetch All Users
  // =========================
  const {
    data: allUsers,
    isLoading: userLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get("/users", {
        withCredentials: true,
      });
      return res.data.users;
    },
    retry: false,
  });

  // =========================
  // Update Users Role
  // =========================
  const updateUserRole = async (id, role) => {
    try {
      const res = await axiosInstance.patch(`/users/${id}/role`, {
        role,
      });

      await refetch();
      showSuccess(res?.data?.message);

      return res.data;
    } catch (error) {
      console.log(error);
      showError(error?.response?.data?.message || "Role Update Failed");
    }
  };

  // =========================
  // Delete Users
  // =========================
  const deleteUser = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await axiosInstance.delete(`/users/${id}`);

        await refetch();

        Swal.fire({
          title: "Deleted!",
          text: "User deleted successfully.",
          icon: "success",
        });
      } catch (error) {
        console.log(error);

        Swal.fire({
          title: "Error!",
          text: error?.response?.data?.message || "User Delete Failed",
          icon: "error",
        });
      }
    }
  };

  // =========================
  // Context Data
  // =========================
  const userInfo = {
    // ----------Data-------------//
    user,
    allUsers,

    // --------loading-----------//
    loading,
    userLoading,
    // ---------Function---------//
    createUser,
    loginUser,
    logoutUser,
    updateUserRole,
    deleteUser,
  };

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};

export default UserProvider;

/* =========================
   Custom Hook
========================= */

export const useUser = () => {
  return useContext(UserContext);
};
