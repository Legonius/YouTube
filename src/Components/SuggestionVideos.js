import React, { useEffect, useState } from "react";
import useUtilities from "../Hooks/useUtilities";
import SuggestVideoCard from "./SuggestVideosCard";

const SuggestionVideos = ({ suggest }) => {
  const [suggestion, setSuggestion] = useState([]);
  const { searchResult } = useUtilities();
  useEffect(() => {
    if (suggest) {
      searchResult(suggest[0], setSuggestion);
    } else {
      searchResult("popular", setSuggestion);
    }
  }, [suggest]);

  return (
    <div>
      <ul className="flex flex-col gap-4">
        {suggestion?.map((video) => (
          <SuggestVideoCard
            key={video.id.videoId}
            id={video.id.videoId}
            info={video.snippet}
          />
        ))}
      </ul>
    </div>
  );
};

export default SuggestionVideos;
