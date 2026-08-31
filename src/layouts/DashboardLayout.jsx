import { Outlet } from "react-router";
import DashboardSidebar from "../dashboard/DashboardSidebar/DashboardSidebar";
import { Menu } from "lucide-react";
import { User } from "lucide-react";
import { useState } from "react";
import { useUser } from "../context/UserProvider";

const DashboardLayout = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const { user, logoutUser } = useUser();
  console.log(user);
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Mobile Overlay */}
      {openSidebar && (
        <div
          onClick={() => setOpenSidebar(false)}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <div
        className={`
            fixed lg:static top-0 left-0 z-50
            h-screen transition-all duration-300
            ${openSidebar ? "translate-x-0" : "-translate-x-full"}
            lg:translate-x-0
          `}
      >
        <DashboardSidebar />
      </div>

      {/* Main Content */}
      <main className="flex-1 h-screen overflow-hidden bg-secondary">
        {/* Top Navbar */}
        <div className="h-17 sticky top-0 z-30 flex items-center justify-between px-4 border-b border-primary bg-card-secondary">
          {/* Left Side */}
          <div>
            <button
              onClick={() => setOpenSidebar(true)}
              className="text-primary md:hidden"
            >
              <Menu size={28} />
            </button>
          </div>

          {/* Right Side */}
          <div className="relative group">
            <div className="p-2.5 rounded-full bg-navy border border-primary text-primary cursor-pointer">
              <User size={22} />
            </div>

            <div
              className="
              absolute right-0 top-14 w-56
              bg-neutral-900 border border-primary
              rounded-xl shadow-lg p-4
              opacity-0 invisible
              group-hover:opacity-100 group-hover:visible
              transition-all duration-200 z-50
            "
            >
              <h3 className="font-semibold">{user?.name}</h3>

              <p className="text-sm text-muted-foreground mt-1">{user?.role}</p>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="h-[calc(100vh-68px)] overflow-y-auto p-5">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
