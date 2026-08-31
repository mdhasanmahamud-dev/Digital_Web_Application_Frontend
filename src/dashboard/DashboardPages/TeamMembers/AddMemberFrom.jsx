import React from "react";
import { useForm } from "react-hook-form";
import DashboardTitle from "../../DashboardTitle/DashboardTitle";
import { useTeam } from "../../../context/teamProvider";

const AddMemberFrom = () => {
  const { register, handleSubmit, reset } = useForm();

  const {addMember} = useTeam();

  const onSubmit = async (data) => {
    const memberData = {
      ...data,
      skills: data.skills
        .split(",")
        .map((skill) => skill.trim())
        .filter(Boolean),
    };

    await addMember(memberData)
    reset();
  };

  return (
    <div>
      <DashboardTitle
        title="Add New Member"
        subtitle="Create a new team member by providing their information."
      />
      <div className="max-w-4xl mx-auto mt-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-card-primary border border-primary rounded-2xl p-8 space-y-6"
        >
          <div className="md:flex">
            <div className="flex-1">
              <label className="block mb-2 font-semibold">Member Name</label>

              <input
                type="text"
                placeholder="Enter member name"
                {...register("name", {
                  required: "Name is required",
                })}
                className="w-full bg-card-secondary border border-primary rounded-xl px-4 py-3"
              />
            </div>

            {/* Role */}
            <div className="flex-1">
              <label className="block mb-2 font-semibold">Role</label>

              <input
                type="text"
                placeholder="Lead Developer"
                {...register("role", {
                  required: "Role is required",
                })}
                className="w-full bg-card-secondary border border-primary rounded-xl px-4 py-3"
              />
            </div>
          </div>
          {/* Name */}

          {/* Skills */}
          <div>
            <label className="block mb-2 font-semibold">Skills</label>

            <input
              type="text"
              placeholder="React, Node.js, MongoDB"
              {...register("skills", {
                required: "Skills are required",
              })}
              className="w-full bg-card-secondary border border-primary rounded-xl px-4 py-3"
            />

            <p className="text-sm text-white-muted mt-2">
              Separate skills with commas (,)
            </p>
          </div>

          {/* Experience */}
          <div>
            <label className="block mb-2 font-semibold">Experience</label>

            <textarea
              rows={4}
              placeholder="React expert. Built 30+ websites."
              {...register("experience", {
                required: "Experience is required",
              })}
              className="w-full bg-card-secondary border border-primary rounded-xl px-4 py-3 resize-none"
            />
          </div>

          {/* Avatar */}
          <div>
            <label className="block mb-2 font-semibold">Avatar URL</label>

            <input
              type="text"
              placeholder="https://example.com/avatar.png"
              {...register("avatar")}
              className="w-full bg-card-secondary border border-primary rounded-xl px-4 py-3"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-accent text-black font-bold py-3 rounded-xl cursor-pointer"
          >
            Add Member
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMemberFrom;
