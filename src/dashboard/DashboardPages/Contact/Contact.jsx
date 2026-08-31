import React from "react";
import DashboardTitle from "../../DashboardTitle/DashboardTitle";
import ContactTable from "./ContactTable";
import { useContact } from "../../../context/ContactProvider";

const Contact = () => {
  const { contactLoading, contacts, updateIsReadStatus, deleteContact } = useContact();
  return (
    <div>
      <DashboardTitle
        title="যোগাযোগ তালিকা"
        subtitle="এখানে সকল contact message এবং consultation request দেখতে পারবেন"
      />
      <ContactTable
        contactLoading={contactLoading}
        contacts={contacts}
        updateIsReadStatus={updateIsReadStatus}
        deleteContact={deleteContact}
      />
    </div>
  );
};

export default Contact;
