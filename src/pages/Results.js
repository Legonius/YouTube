import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SEARCH_YOUTUBE_API } from "../utils/constants";

const Results = () => {
  const location = useLocation();
  const [keyword, setKeyword] = useState("");
  const [videosId, setVideosId] = useState([]);
  useEffect(() => {
    setKeyword(location?.state?.data);
  }, [location]);
  useEffect(() => {
    searchResult();
  }, [keyword]);
  const searchResult = async () => {
    if (keyword.length > 0) {
      try {
        const fatching = await fetch(
          SEARCH_YOUTUBE_API +
            keyword +
            `&key=${process.env.REACT_APP_YOUTUBE_APIKEY}`
        );
        const data = await fatching.json();
        console.log(data);
        setVideosId(data.items);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return <div></div>;
};

export default Results;
