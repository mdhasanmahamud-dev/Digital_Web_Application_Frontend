import {
  LayoutDashboard,
  Users,
  Briefcase,
  Layers3,
  UserCog,
  MessageSquare,
  BarChart3,
  CreditCard,
  Settings,
  LogOut,
  Contact,
  Home,
} from "lucide-react";
import { NavLink } from "react-router";
import { useUser } from "../../context/UserProvider";
const DashboardSidebar = () => {
  const { user, logoutUser } = useUser();
  const menuItems = [
    {
      name: "Home",
      path: "/",
      icon: <Home size={20} />,
    },
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Users",
      path: "/dashboard/users",
      icon: <Users size={20} />,
    },
    {
      name: "Contact",
      path: "/dashboard/contact",
      icon: <Contact size={20} />,
    },
    {
      name: "Projects",
      path: "/dashboard/projects",
      icon: <Briefcase size={20} />,
    },
    {
      name: "Team Members",
      path: "/dashboard/teamMember",
      icon: <UserCog size={20} />,
    },
  ];

  return (
    <aside className="w-72.5 min-h-screen bg-card-secondary border-r border-primary flex flex-col justify-between">
      {/* Top */}
      <div>
        {/* Logo */}
        <div className="h-17 flex items-center px-6 border-b border-primary">
          <h1 className="text-2xl font-bold font-heading text-primary">
            Digital Management
          </h1>
        </div>

        {/* Menu */}
        <div className="p-4 space-y-3">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className="w-full flex items-center gap-4 px-4 py-3 rounded-xl  bg-card-primary hover:bg-card-hover-primary transition-all duration-300 text-white-soft hover:text-white cursor-pointer"
            >
              <span className="text-primary">{item.icon}</span>

              <span className="font-medium font-bangla">{item.name}</span>
            </NavLink>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="p-4 border-t border-primary text-center">
        <button
          onClick={async () => {
            await logoutUser();
          }}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 hover:bg-red-500/20 transition-all duration-300 text-red-400"
        >
          <LogOut size={20} />

          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
