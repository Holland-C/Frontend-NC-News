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
        Created at {created_at} by {author}, Comments:
        {comment_count}
        <ArticleVoteUpdater votes={votes} article_id={article_id} />
      </h4>
    </section>
  );
};

export default ArticleCard;
