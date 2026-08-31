import React from "react";
import { Trash2, Eye } from "lucide-react";
import ReactLoaderSpiner from "../../../components/ReactLoaderSpiner";
import NotFound from "../../../components/NotFound";

const TeamMemberTable = ({ team, teamLoading, deleteMember }) => {
  if (teamLoading) return <ReactLoaderSpiner />;
  if (!team || team.length === 0)
    return (
      <NotFound
        title="No Team Members Found"
        description="There are currently no team members available."
      />
    );

  const handleDeleteMember = async (id) => {
    await deleteMember(id);
  };

  return (
    <div className="bg-card-secondary border border-primary rounded-3xl p-5 overflow-x-auto">
      <table className="w-full min-w-200 border-collapse">
        <thead>
          <tr className="bg-card-primary text-left">
            <th className="px-5 py-4 text-primary font-semibold rounded-l-xl">
              Member
            </th>

            <th className="px-5 py-4 text-primary font-semibold">Role</th>

            <th className="px-5 py-4 text-primary font-semibold">Skills</th>

            <th className="px-5 py-4 text-primary font-semibold">Experience</th>

            <th className="px-5 py-4 text-primary font-semibold rounded-r-xl text-center">
              Action
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-blue-900">
          {team.map((member, index) => (
            <tr
              key={member._id}
              className="bg-card-hover-secondary transition-all duration-300"
            >
              {/* Member */}
              <td className="px-5 py-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/20 text-primary font-bold">
                    {index + 1}
                  </span>

                  <div className="flex items-center gap-3">
                    {/* <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl">
                      {member.avatar}
                    </div> */}

                    <div>
                      <h3 className="text-white font-medium">{member.name}</h3>
                    </div>
                  </div>
                </div>
              </td>

              {/* Role */}
              <td className="px-5 py-4">
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm">
                  {member.role}
                </span>
              </td>

              {/* Skills */}
              <td className="px-5 py-4">
                <div className="flex flex-wrap gap-2">
                  {member.skills?.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded-lg bg-primary/10 text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </td>

              {/* Experience */}
              <td className="px-5 py-4 text-white-soft">{member.experience}</td>

              {/* Action */}
              <td className="px-5 py-4">
                <div className="flex items-center justify-center gap-3">
                  <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 transition-all">
                    <Eye size={18} />
                    View
                  </button>

                  <button
                    onClick={() => handleDeleteMember(member._id)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-all"
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
  );
};

export default TeamMemberTable;
