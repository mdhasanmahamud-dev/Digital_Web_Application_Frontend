import React, { useState } from "react";
import { Trash2, Eye, X, EyeOff } from "lucide-react";
import ReactLoaderSpiner from "../../../components/ReactLoaderSpiner";
import NotFound from "../../../components/NotFound";

const ContactTable = ({
  contacts,
  contactLoading,
  deleteContact,
  updateIsReadStatus,
}) => {
  const [selectedMessage, setSelectedMessage] = useState(null);

  if (contactLoading) return <ReactLoaderSpiner />;
  if (!contacts || contacts.length === 0)
    return (
      <NotFound
        title="No Contact Messages Found"
        description="There are currently no customer contact messages available."
      />
    );

  // Handle isReaded Update
  const handleViewMessage = async (contact) => {
    setSelectedMessage(contact.message);
    try {
      await updateIsReadStatus(contact._id);
    } catch (error) {
      console.log(error);
    }
  };

  // Handle delete contact
  const handleDelete = async (id) => {
    try {
      await deleteContact(id);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="bg-card-secondary border border-primary rounded-3xl p-5 overflow-x-auto">
        <table className="w-full min-w-175 border-collapse">
          <thead>
            <tr className="bg-card-primary text-left">
              <th className="px-5 py-4 text-primary font-semibold rounded-l-xl">
                Name
              </th>

              <th className="px-5 py-4 text-primary font-semibold">Email</th>

              <th className="px-5 py-4 text-primary font-semibold">Phone</th>

              <th className="px-5 py-4 text-primary font-semibold">Message</th>

              <th className="px-5 py-4 text-primary font-semibold rounded-r-xl text-center">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-blue-900">
            {contacts.map((contact, index) => (
              <tr
                key={contact._id}
                className="bg-card-hover-secondary transition-all duration-300"
              >
                {/* Name */}
                <td className="px-5 py-4 text-white">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-sm font-bold text-primary">
                      {index + 1}
                    </span>

                    <span>{contact.name}</span>
                  </div>
                </td>

                {/* Email */}
                <td className="px-5 py-4 text-white-soft">{contact.email}</td>

                {/* Phone */}
                <td className="px-5 py-4 text-white-soft">{contact.phone}</td>

                {/* Message */}
                <td className="px-5 py-4 text-white-soft">
                  <button
                    onClick={() => handleViewMessage(contact)}
                    className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                      contact.isRead
                        ? "bg-green-500/10 hover:bg-green-500/20 text-green-400"
                        : "bg-blue-500/10 hover:bg-blue-500/20 text-blue-400"
                    }`}
                  >
                    {contact.isRead ? <EyeOff size={18} /> : <Eye size={18} />}

                    {contact.isRead ? "Read" : "Message"}
                  </button>
                </td>

                {/* Action */}
                <td className="px-5 py-4 text-center">
                  <button
                    onClick={() => handleDelete(contact._id)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-all duration-300"
                  >
                    <Trash2 size={18} />
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          
        </table>
      </div>

      {/* Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
          <div className="bg-card-secondary w-full md:max-w-lg rounded-2xl p-6 relative border border-primary">
            {/* Close Button */}
            <button
              onClick={() => setSelectedMessage(null)}
              className="absolute top-4 right-4 text-white-soft hover:text-red-400"
            >
              <X size={22} />
            </button>

            <h2 className="text-2xl font-bold text-white mb-4">
              Contact Message
            </h2>

            <p className="text-white-soft leading-7">{selectedMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactTable;
