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
  handleCommentDelete,
}) => {
  const handleDeleteButton = (comment_id) => {
    api.deleteComment(comment_id);
    handleCommentDelete(comment_id);
  };

  if (author === username) {
    return (
      <main className="Comments">
        <h4>{author} :</h4>
        <p>{body}</p>
        <p>
          Created at {new Date(created_at).toDateString()},{" "}
          {new Date(created_at).toLocaleTimeString()}
        </p>
        <CommentVoteUpdater comment_id={comment_id} votes={votes} />
        <button onClick={() => handleDeleteButton(comment_id)}>
          Delete your comment
        </button>
      </main>
    );
  }
  return (
    <main className="Comments">
      <h4>{author} :</h4>
      <p>{body}</p>
      <p>Created at {created_at}</p>
      <CommentVoteUpdater comment_id={comment_id} votes={votes} />
    </main>
  );
};

export default CommentCard;
