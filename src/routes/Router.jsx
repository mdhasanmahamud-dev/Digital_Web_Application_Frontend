import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import SignIn from "../pages/Auth/SignIn";
import Register from "../pages/Auth/Register";
import DashboardHome from "../dashboard/DashboardHome/DashboardHome";
import DashboardLayout from "../layouts/DashboardLayout";
import Users from "../dashboard/DashboardPages/Users/Users";
import PrivateRoute from "./PrivateRoute";
import Contact from "../dashboard/DashboardPages/Contact/Contact";
import DashboardProjects from "../dashboard/DashboardPages/DashboardProjects/DashboardProjects";
import AddProjectForm from "../dashboard/DashboardPages/DashboardProjects/AddProjectForm";
import EditProject from "../dashboard/DashboardPages/DashboardProjects/EditProject";
import ProjectPages from "../pages/ProjectPages/ProjectPages";
import TeamMembers from "../dashboard/DashboardPages/TeamMembers/TeamMembers";
import AddMemberFrom from "../dashboard/DashboardPages/TeamMembers/AddMemberFrom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/projects",
        element: <ProjectPages />,
      },
    ],
  },
  // Dashboard Routes
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "projects",
        element: <DashboardProjects />,
      },
      {
        path: "addProject",
        element: <AddProjectForm />,
      },
      {
        path: "editProject/:id",
        element: <EditProject />,
      },
      {
        path: "teamMember",
        element: <TeamMembers />,
      },
      {
        path: "addMember",
        element: <AddMemberFrom />,
      },
    ],
  },
]);
