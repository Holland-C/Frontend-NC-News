import React from "react";
import CommentVoteUpdater from "./VoteUpdaters/CommentVoteUpdater";

const CommentCard = ({ author, votes, created_at, body, comment_id }) => {
  return (
    <>
      <h4>{author} :</h4>
      <p>{body}</p>
      <p>Created at {created_at}</p>
      <CommentVoteUpdater comment_id={comment_id} votes={votes} />
    </>
  );
};

export default CommentCard;
