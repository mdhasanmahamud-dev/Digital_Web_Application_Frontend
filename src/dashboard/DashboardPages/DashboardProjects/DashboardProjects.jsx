import DashboardTitle from "../../DashboardTitle/DashboardTitle";
import AddProjectButton from "./AddProjectButton";
import DashboardProjectTable from "./DashboardProjectTable";

const DashboardProjects = () => {
  return (
    <div>
      <DashboardTitle
        title="প্রজেক্ট ড্যাশবোর্ড"
        subtitle="এখান থেকে সব প্রজেক্ট ম্যানেজ, ট্র্যাক এবং মনিটর করতে পারবে।"
      />
      <AddProjectButton/>
      <DashboardProjectTable/>
    </div>
  );
};

export default DashboardProjects;
