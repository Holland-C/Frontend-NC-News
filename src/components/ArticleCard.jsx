import React from "react";
import ArticleVoteUpdater from "./VoteUpdaters/ArticleVoteUpdater";
import { Link } from "@reach/router";

const ArticleCard = ({
  title,
  created_at,
  author,
  votes,
  comment_count,
  article_id,
}) => {
  return (
    <section className="article">
      <Link to={`/articles/${article_id}`}>{title}</Link>
      <h4>
        Created at {new Date(created_at).toDateString()},{" "}
        {new Date(created_at).toLocaleTimeString()} by {author}, Comments:
        {comment_count}
      </h4>
      <ArticleVoteUpdater votes={votes} article_id={article_id} />
    </section>
  );
};

export default ArticleCard;
