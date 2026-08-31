import React from "react";
import DashboardTitle from "../../DashboardTitle/DashboardTitle";
import { useUser } from "../../../context/UserProvider";
import UserTable from "./UserTable";

const Users = () => {
  const users = [
    {
      id: 1,
      name: "Hasan Mahamud",
      email: "hasan@gmail.com",
      role: "Admin",
    },
    {
      id: 2,
      name: "Jui Akter",
      email: "jui@gmail.com",
      role: "Manager",
    },
    {
      id: 3,
      name: "Rahim Uddin",
      email: "rahim@gmail.com",
      role: "Editor",
    },
    {
      id: 4,
      name: "Karim Ahmed",
      email: "karim@gmail.com",
      role: "Support",
    },
    {
      id: 5,
      name: "Nusrat Jahan",
      email: "nusrat@gmail.com",
      role: "User",
    },
  ];
  const { allUsers, userLoading, updateUserRole, deleteUser } = useUser();

  return (
    <div>
      <DashboardTitle
        title="ইউজার ম্যানেজমেন্ট"
        subtitle="এখান থেকে সকল রেজিস্টার করা ইউজার ম্যানেজ করুন"
      />
      <UserTable
        allUsers={allUsers}
        userLoading={userLoading}
        updateUserRole={updateUserRole}
        deleteUser={deleteUser}
      />
    </div>
  );
};

export default Users;
