import React from "react";
import { Trash2 } from "lucide-react";
import ReactLoaderSpiner from "../../../components/ReactLoaderSpiner";
import NotFound from "../../../components/NotFound";
const UserTable = ({ allUsers, userLoading, updateUserRole, deleteUser }) => {
  if (userLoading) return <ReactLoaderSpiner />;
  if (!allUsers || allUsers.length === 0)
    return (
      <NotFound
        title="No Users Found"
        description="There are currently no users available."
      />
    );

  return (
    <div>
      <div className="bg-card-secondary border border-primary rounded-3xl p-5 overflow-x-auto">
        {/* Table */}
        <table className="w-full min-w-175 border-collapse">
          {/* Table Head */}
          <thead>
            <tr className="bg-card-primary text-left">
              <th className="px-5 py-4 text-primary font-semibold rounded-l-xl">
                Name
              </th>

              <th className="px-5 py-4 text-primary font-semibold">Email</th>

              <th className="px-5 py-4 text-primary font-semibold">Role</th>

              <th className="px-5 py-4 text-primary font-semibold rounded-r-xl text-center">
                Action
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-blue-900">
            {allUsers?.map((user, index) => (
              <tr
                key={user.id}
                className="bg-card-hover-secondary transition-all duration-300"
              >
                <td className="px-5 py-4 text-white">
                  <div className="flex items-center gap-3">
                    {/* User ID */}
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-sm font-bold text-primary">
                      {index + 1}
                    </span>

                    {/* User Name */}
                    <span>{user.name}</span>
                  </div>
                </td>

                <td className="px-5 py-4 text-white-soft">{user.email}</td>

                <td className="px-5 py-4">
                  <select
                    value={user.role}
                    onChange={(e) => updateUserRole(user._id, e.target.value)}
                    className="
                              px-3 py-2 rounded-lg
                              bg-card-primary
                              border border-primary
                              text-white
                              outline-none
                              focus:border-orange-500 cursor-pointer"
                  >
                    <option value="super-admin">Super-admin</option>
                    <option value="admin">Admin</option>
                    <option value="moderator">Moderator</option>
                    <option value="user">User</option>
                  </select>
                </td>

                <td className="px-5 py-4 text-center">
                  <button onClick={() => deleteUser(user?._id)} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-all duration-300">
                    <Trash2 size={18} />
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
