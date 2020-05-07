import React from "react";
import CommentVoteUpdater from "./VoteUpdaters/CommentVoteUpdater";
import * as api from "../utils/api";

const CommentCard = ({
  author,
  votes = 0,
  created_at = new Date().toLocaleString(),
  body,
  comment_id,
  username,
}) => {
  if (author === username) {
    return (
      <>
        <h4>{author} :</h4>
        <p>{body}</p>
        <p>Created at {created_at}</p>
        <CommentVoteUpdater comment_id={comment_id} votes={votes} />
        <button onClick={() => handleDeleteButton(comment_id)}>X</button>
      </>
    );
  }
  return (
    <>
      <h4>{author} :</h4>
      <p>{body}</p>
      <p>Created at {created_at}</p>
      <CommentVoteUpdater comment_id={comment_id} votes={votes} />
    </>
  );
};
const handleDeleteButton = (comment_id) => {
  api.deleteComment(comment_id);
};

export default CommentCard;
