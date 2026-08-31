import React, { useState } from "react";
import DigitalManegmentLogo from "../assets/DigitalManegmentLogo.svg";
import { NavLink } from "react-router";
import { useUser } from "../context/UserProvider";

export const navItems = [
  { name: "হোম", path: "/#home" },
  { name: "আমাদের সম্পর্কে", path: "/#about" },
  { name: "সার্ভিস", path: "/#services" },
  { name: "প্রজেক্ট", path: "/#projects" },
  { name: "যোগাযোগ", path: "/#contact" },
];

const Navbar = () => {
  const { user, logoutUser } = useUser();

  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  // Dashboard Roles
  const dashboardRoles = ["moderator", "admin", "super-admin"];

  // Check Dashboard Access
  const canAccessDashboard = dashboardRoles.includes(user?.role);

  return (
    <nav className="sticky top-0 z-50 bg-white backdrop-blur-md shadow-sm">
      <div className="container-custom flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/#home">
          <img src={DigitalManegmentLogo} alt="logo" className="h-20 w-auto" />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 font-semibold">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.path}
                className="text-navy hover:text-accent transition"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-5">
          {/* Dashboard Button */}
          {canAccessDashboard && (
            <NavLink
              to="/dashboard"
              className="font-bangla bg-accent text-black font-semibold py-3 px-6 rounded-md transition-all"
            >
              ড্যাশবোর্ড
            </NavLink>
          )}

          {/* User Profile */}
          {user && (
            <div className="relative">
              {/* Profile Image */}
              <img
                onClick={() => setProfileOpen(!profileOpen)}
                src={user?.photo || "https://i.ibb.co/4pDNDk1/avatar.png"}
                alt="profile"
                className="w-12 h-12 rounded-full object-cover border-2 border-accent cursor-pointer"
              />

              {/* Profile Dropdown */}
              {profileOpen && (
                <div className="absolute right-0 top-16 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-50">
                  {/* User Info */}
                  <div className="border-b pb-3 mb-3">
                    <h3 className="font-bold text-navy text-sm">
                      {user?.name}
                    </h3>

                    <p className="text-xs text-gray-500">{user?.email}</p>
                  </div>

                  {/* Profile Button */}
                  <NavLink
                    to="/"
                    className="block w-full text-center bg-gray-100 hover:bg-gray-200 text-black font-medium py-2 rounded-xl transition-all mb-3"
                  >
                    প্রোফাইল
                  </NavLink>

                  {/* Logout Button */}
                  <button
                    onClick={async () => {
                      await logoutUser();
                      setProfileOpen(false);
                    }}
                    className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 rounded-xl transition-all cursor-pointer"
                  >
                    লগআউট
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Login Button */}
          {!user && (
            <NavLink
              to="/login"
              className="bg-accent text-black font-bold py-3 px-6 rounded-md transition-all"
            >
              Login
            </NavLink>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-primary"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white px-6 pb-6 shadow-lg">
          {/* Mobile Nav */}
          <ul className="flex flex-col gap-4 py-5">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className="block text-navy font-medium"
                >
                  {item.name}
                </a>
              </li>
            ))}

            {/* Dashboard Mobile */}
            {canAccessDashboard && (
              <li>
                <NavLink
                  to="/dashboard"
                  onClick={() => setOpen(false)}
                  className="block text-navy font-semibold"
                >
                  ড্যাশবোর্ড
                </NavLink>
              </li>
            )}
          </ul>

          {/* Mobile Profile */}
          {user && (
            <div className="flex items-center gap-3 border-t pt-4">
              <img
                src={user?.photo || "https://i.ibb.co/4pDNDk1/avatar.png"}
                alt="profile"
                className="w-12 h-12 rounded-full object-cover border-2 border-accent"
              />

              <div>
                <h3 className="font-bold text-navy">{user?.name || "User"}</h3>

                <p className="text-sm text-gray-500 capitalize">{user?.role}</p>
              </div>
            </div>
          )}

          {/* Mobile Login */}
          {!user && (
            <NavLink
              to="/login"
              onClick={() => setOpen(false)}
              className="block text-center bg-accent text-black font-bold py-3 rounded-md mt-4"
            >
              Login
            </NavLink>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
