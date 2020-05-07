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

    return (
      <>
        <h2>{title}</h2>
        <h3>
          Written by {author} at {created_at}
        </h3>
        <ArticleVoteUpdater votes={votes} article_id={article_id} />
        <p>{body}</p>
        <h3>
          Readers have written {comment_count} comments below - Submit your
          comment here:
        </h3>
        <form onSubmit={this.handleCommentSubmission}>
          <input></input>
          <button>Submit</button>
        </form>
        <h3>Comments:</h3>
        <CommentList article_id={article_id} />
      </>
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

  // handleCommentSubmission = (event)=>{
  //   event.preventDefault()
  // }
}

export default SingleArticle;
