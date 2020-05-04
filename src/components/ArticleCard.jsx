import React from "react";
import VoteUpdater from "./VoteUpdater";
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
    <section>
      <Link to={`/articles/${article_id}`}>{title}</Link>
      <h4>
        created at
        {created_at} by {author}, Comments:
        {comment_count}
      </h4>
      <VoteUpdater votes={votes} article_id={article_id} />
    </section>
  );
};

export default ArticleCard;
