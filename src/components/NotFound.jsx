import React from "react";
import { SearchX } from "lucide-react";
import { NavLink } from "react-router";

const NotFound = ({title, description}) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-5 text-center">
      {/* Icon */}
      <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        <SearchX size={50} className="text-primary" />
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-white mb-3">{title}</h2>

      {/* Description */}
      <p className="text-white-soft max-w-md leading-relaxed">{description}</p>
    </div>
  );
};

export default NotFound;
