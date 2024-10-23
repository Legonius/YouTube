import CommentCard from "./CommentCard";

const Comments = ({ data, comments }) => {
  let { commentCount } = data.statistics;
  commentCount = Number(commentCount);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-semibold text-2xl">
        {commentCount.toLocaleString("en-US")} Comments
      </h1>
      <ul className="flex flex-col gap-6">
        {comments.length > 0 &&
          comments.map((com) => (
            <CommentCard key={com.id} commentProps={com.snippet} />
          ))}
      </ul>
    </div>
  );
};

export default Comments;
