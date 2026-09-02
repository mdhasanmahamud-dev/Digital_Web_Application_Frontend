import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/Router.jsx";
import UserProvider from "./context/UserProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ContactProvider from "./context/ContactProvider.jsx";
import ProjectProvider from "./context/ProjectProvider.jsx";
import TeamMembersProvider from "./context/TeamMembersProvider.jsx";


// Create a client
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <TeamMembersProvider>
          <ContactProvider>
            <ProjectProvider>
              <RouterProvider router={router} />
            </ProjectProvider>
          </ContactProvider>
        </TeamMembersProvider>
      </UserProvider>
    </QueryClientProvider>
  </StrictMode>,
);
