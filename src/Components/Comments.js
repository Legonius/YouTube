const Comments = ({ data }) => {
  let { commentCount } = data.statistics;
  commentCount = Number(commentCount);

  return (
    <div>
      <h1 className="font-semibold text-2xl">
        {commentCount.toLocaleString("en-US")} Comments
      </h1>
    </div>
  );
};

export default Comments;
