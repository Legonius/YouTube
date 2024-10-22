import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { SEARCH_YOUTUBE_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { onn } from "../utils/slices/appSlice";
import VideoCardListType from "../Components/VideoCardListType";

const Results = () => {
  const location = useLocation();
  const [searchParam] = useSearchParams();
  const [keyword, setKeyword] = useState("");
  const [videos, setVideos] = useState([]);
  const dispatch = useDispatch();

  // Setting the keyword based on location state or search params
  useEffect(() => {
    setKeyword(location?.state?.data || searchParam.get("search_query"));
  }, [location, searchParam]);

  // Fetching search results when the keyword changes
  useEffect(() => {
    if (keyword) {
      searchResult();
    }
  }, [keyword]);

  // Dispatching the redux action
  useEffect(() => {
    dispatch(onn());
  }, []);

  // Function to fetch YouTube search results
  const searchResult = async () => {
    if (keyword.length > 0) {
      try {
        const response = await fetch(
          SEARCH_YOUTUBE_API +
            keyword +
            `&key=${process.env.REACT_APP_YOUTUBE_APIKEY}`
        );
        const data = await response.json();
        setVideos(data.items); // Storing video IDs in state
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }
  };

  return (
    <div className="h-full overflow-y-auto">
      {/* Render the list of videos here */}
      {videos.length > 0 ? (
        <ul>
          {videos.map((video) => (
            <li key={video.id.videoId}>
              <VideoCardListType id={video.id.videoId} info={video.snippet} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No videos found</p>
      )}
    </div>
  );
};

export default Results;
