import React from "react";
import { useDispatch } from "react-redux";
import { toggle } from "../utils/slices/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggle());
  };
  return (
    <div className="grid grid-flow-col w-screen py-3 px-4 shadow-lg fixed backdrop-blur-2xl bg-white/80">
      <div className="flex gap-4 col-span-1 items-center">
        <img
          onClick={handleToggle}
          className="h-8 cursor-pointer"
          alt="menu-icon"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png"
        />
        <img
          className="h-8"
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png"
        />
      </div>
      <div className="flex col-span-10 items-center">
        <input
          className="flex-1 border h-12 border-gray-400 py-2 px-4 outline-none rounded-l-full"
          type="text"
          placeholder="Search"
        />
        <div className="px-6 h-12 bg-gray-400 rounded-r-full flex items-center">
          <img
            className="h-8"
            alt="search-icon"
            src="https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png"
          />
        </div>
      </div>
      <div className="col-span-1  flex items-center">
        <img
          className="h-10 mx-auto"
          alt="user"
          src="https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png"
        />
      </div>
    </div>
  );
};

export default Header;
