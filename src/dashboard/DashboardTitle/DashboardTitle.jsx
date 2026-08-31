import React from "react";

const DashboardTitle = ({
  title = "Dashboard Overview",
  subtitle = "Manage and monitor your entire system from one powerful dashboard.",
}) => {
  return (
    <div className="bg-primary border border-primary relative overflow-hidden rounded-3xl px-6 py-10 text-center mb-2">
      {/* Background Glow */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-orange-500/10 blur-3xl rounded-full"></div>
      {/* Content */}
      <div className="relative z-10">
        {/* Small Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card-primary border border-primary mb-5">
          <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>

          <span className="text-sm text-white-soft tracking-wide">
            Professional Management System
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold  text-primary leading-tight">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto mt-2 text-secondary text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default DashboardTitle;
