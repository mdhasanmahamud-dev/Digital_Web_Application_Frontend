import React from "react";
import { NavLink } from "react-router";

const AddMemberButton = ({team}) => {
  console.log(team)
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
        {/* Left Side */}
        <div>
          <p className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary hover:opacity-90 text-white font-medium transition-all duration-300 shadow-lg cursor-pointer">
             Members:
            <span className="text-primary font-semibold ml-1">{team?.length}</span>
          </p>
        </div>

        {/* Right Side */}
        <NavLink
          to="/dashboard/addMember"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary hover:opacity-90 text-white font-medium transition-all duration-300 shadow-lg cursor-pointer"
        >
          + Add Member
        </NavLink>
      </div>
    </div>
  );
};

export default AddMemberButton;
