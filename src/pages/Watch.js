import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { off } from "../utils/slices/appSlice";

const Watch = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(off());
  }, []);
  return (
    <div className="w-full overflow-hidden p-4">
      <div>
        <iframe
          className="w-2/3 min-h-80  h-[30vw]"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="DRONE HITS NETANYAHU&#39;S HOUSE | Israel on High Alert after Hezbollah Almost Eliminates Netanyahu"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default Watch;
