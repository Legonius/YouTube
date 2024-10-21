import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isOpen = useSelector((Store) => Store.appSwitch.isOpen);

  //early return
  if (!isOpen) return <></>;
  return (
    <div className="max-w-52 min-w-48 h-full overflow-auto flex flex-col gap-3 mt-3 font-semibold">
      <ul className="flex flex-col gap-3 pl-10">
        <li>
          <Link to={"/"}>HOME</Link>
        </li>
        <li>Short</li>
        <li>Subscriptions</li>
      </ul>

      <div className=" border-t-2 pl-10">
        <h1 className="text-xl my-3">You</h1>
        <ul className="flex flex-col gap-3">
          <li>History</li>
          <li>Playlist</li>
          <li>Downloads</li>
        </ul>
      </div>
      <div className=" border-t-2 pl-10">
        <h1 className="text-xl my-3">Explore</h1>
        <ul className="flex flex-col gap-3">
          <li>Trending</li>
          <li>Music</li>
          <li>Live</li>
          <li>Gaming</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
