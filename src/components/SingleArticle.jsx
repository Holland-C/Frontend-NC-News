import React, { Component } from "react";
import Loader from "./Loader";
import * as api from "../utils/api";
import VoteUpdater from "./VoteUpdater";

class SingleArticle extends Component {
  state = {
    article: {},
    isLoading: true,
  };
  render() {
    const { isLoading } = this.state;
    if (isLoading) return <Loader />;
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
        <VoteUpdater votes={votes} article_id={article_id} />
        <p>{body}</p>
        <h3>
          Readers have written {comment_count} comments below - Submit your
          comment here:
        </h3>
        <input></input>
        <button>Submit</button>
      </>
    );
  }
  componentDidMount() {
    this.fetchSingleArticle();
  }
  fetchSingleArticle = () => {
    api.getSingleArticle(this.props.article_id).then((article) => {
      this.setState({ article, isLoading: false });
    });
  };
}

export default SingleArticle;
