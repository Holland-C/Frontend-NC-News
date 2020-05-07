import React, { Component } from "react";
import Loader from "./Loader";
import ErrorDisplayer from "./ErrorDisplayer";
import CommentCard from "./CommentCard";
import * as api from "../utils/api";

class CommentList extends Component {
  state = {
    comments: [],
    isLoading: true,
    err: "",
  };
  render() {
    const { comments, isLoading, err } = this.state;
    if (isLoading) return <Loader />;
    if (err) return <ErrorDisplayer err={err} />;
    return (
      <main>
        {comments.map((comment) => {
          return <CommentCard {...comment} key={comment.comment_id} />;
        })}
      </main>
    );
  }
  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = () => {
    api
      .getComments(this.props.article_id)
      .then((comments) => {
        console.log(comments);
        this.setState({ comments, isLoading: false });
      })
      .catch((err) => {
        this.setState({ isLoading: false, err: err.response.data.msg });
      });
  };
}

export default CommentList;
