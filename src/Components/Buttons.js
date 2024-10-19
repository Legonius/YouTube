import React from "react";

const Buttons = ({ title }) => {
  return (
    <button className="capitalize px-4 py-2 rounded-lg bg-slate-400 text-white text-nowrap">
      {title}
    </button>
  );
};

export default Buttons;
