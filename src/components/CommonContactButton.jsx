import React from "react";

const CommonContactButton = ({ text, ref }) => {
  return (
    <button className="bg-accent hover:bg-accent/90 text-black font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 mx-auto transition-all transform active:scale-95 group shadow-lg shadow-accent/20">
      <a href={ref}>
        <span className="mt-1">{text}</span>
        <span className="group-hover:translate-x-1 transition-transform">
          →
        </span>
      </a>
    </button>
  );
};

export default CommonContactButton;
