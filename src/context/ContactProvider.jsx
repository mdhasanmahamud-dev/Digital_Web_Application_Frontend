import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { useUser } from "./UserProvider";
import axios from "axios";
import { showError, showSuccess } from "../utils/showAlert";
import { useContext } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/axiosInstance";

export const ContactContext = createContext(null);

const ContactProvider = ({ children }) => {
  const { user } = useUser();
  const [loading, setLoading] = useState(true);

  // Create New Contact
  const createContact = async (contactData) => {
    try {
      setLoading(true);
      const res = await axiosInstance.post("/createContact", contactData);
      //Success Message
      showSuccess(res.data.message);
      refetchStats()
      return res.data;
    } catch (error) {
      showError(error?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // GET ALL CONTACT
  // =========================
  const {
    data: contacts = [],
    isLoading: contactLoading,
    refetch,
  } = useQuery({
    queryKey: ["contacts"],

    queryFn: async () => {
      const res = await axiosInstance.get("/allContact");
      return res.data.data;
    },
  });

  // =========================
  // Update is readed status
  // =========================
  const updateIsReadStatus = async (id) => {
    setLoading(true);
    try {
      const res = await axiosInstance.patch(`/contact/${id}/read`);
      refetch();
      refetchStats()
      return res.data;
    } catch (error) {
      showError(error?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // Delete Contact
  // =========================
  const deleteContact = async (id) => {
    try {
      setLoading(true);

      const res = await axiosInstance.delete(`/contact/${id}`);

      showSuccess(res.data.message);

      refetch();
      refetchStats()

      return res.data;
    } catch (error) {
      showError(error?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // Count Contact
  // =========================
  const {
    data: contactStats,
    isLoading: statsLoading,
    refetch: refetchStats,
  } = useQuery({
    queryKey: ["contact-stats"],
    queryFn: async () => {
      const res = await axiosInstance.get("/contact-statistics");
      return res.data.data;
    },
  });



  const contactInfo = {
    // State
    loading,
    contactLoading,
    // Data
    contacts,
    contactStats,
    // Function
    createContact,
    updateIsReadStatus,
    deleteContact,
  };

  return (
    <ContactContext.Provider value={contactInfo}>
      {children}
    </ContactContext.Provider>
  );
};

export default ContactProvider;

// Coustom Hook
export const useContact = () => {
  return useContext(ContactContext);
};
