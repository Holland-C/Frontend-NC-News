import React, { Component } from "react";
import Loader from "./Loader";
import * as api from "../utils/api";
import ArticleVoteUpdater from "./VoteUpdaters/ArticleVoteUpdater";
import ErrorDisplayer from "./ErrorDisplayer";
import CommentList from "./CommentList";

class SingleArticle extends Component {
  state = {
    article: {},
    isLoading: true,
    err: "",
  };
  render() {
    const { isLoading, err } = this.state;
    if (isLoading) return <Loader />;
    if (err) return <ErrorDisplayer err={err} />;
    const {
      author,
      comment_count,
      title,
      body,
      created_at,
      votes,
      article_id,
    } = this.state.article;
    const { username } = this.props;
    return (
      <main className="Article_body">
        <h2>{title}</h2>
        <h3>
          Written by {author} at {created_at}
        </h3>
        <p>{body}</p>
        <ArticleVoteUpdater votes={votes} article_id={article_id} />

        <CommentList
          article_id={article_id}
          comment_count={comment_count}
          username={username}
        />
      </main>
    );
  }
  componentDidMount() {
    this.fetchSingleArticle();
  }
  fetchSingleArticle = () => {
    api
      .getSingleArticle(this.props.article_id)
      .then((article) => {
        this.setState({ article, isLoading: false });
      })
      .catch((err) => {
        console.dir(err);
        this.setState({ isLoading: false, err: err.response.data.msg });
      });
  };
}

export default SingleArticle;
