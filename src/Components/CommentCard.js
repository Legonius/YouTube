import React from "react";
import useUtilities from "../Hooks/useUtilities";
import { GrDislike, GrLike } from "react-icons/gr";

const CommentCard = ({ commentProps }) => {
  const { snippet } = commentProps.topLevelComment;
  const {
    textDisplay,
    authorProfileImageUrl,
    authorDisplayName,
    likeCount,
    publishedAt,
  } = snippet;
  const { dateFormatting, numberFomatting } = useUtilities();
  return (
    <li className="w-full flex items-start gap-4">
      <div className="h-10 w-10 min-w-10 overflow-hidden rounded-full bg-red-300">
        <img
          className="w-full"
          loading="lazy"
          src={authorProfileImageUrl}
          alt="profile Pic"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <span className="font-semibold">{authorDisplayName}</span>

          <span className="ml-2 opacity-80">{dateFormatting(publishedAt)}</span>
        </div>
        <span>{textDisplay}</span>
        <div className="flex items-center gap-3">
          <GrLike />
          {likeCount > 0 && (
            <span className="mr-2">{numberFomatting(likeCount)}</span>
          )}
          <GrDislike />
        </div>
      </div>
    </li>
  );
};

export default CommentCard;
