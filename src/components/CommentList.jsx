import React, { Component } from "react";
import Loader from "./Loader";
import ErrorDisplayer from "./ErrorDisplayer";
import CommentCard from "./CommentCard";

import * as api from "../utils/api";

class CommentList extends Component {
  state = {
    comments: [],
    body: "",
    newComment: null,
    isLoading: true,
    err: "",
  };
  render() {
    const { comments, isLoading, err, newComment } = this.state;
    const { comment_count, username } = this.props;
    if (isLoading) return <Loader />;
    if (err) return <ErrorDisplayer err={err} />;
    if (newComment)
      return (
        <>
          <h3>Comments:</h3>
          <>
            <h4>
              Readers have written {comment_count} comments below - Submit your
              comment here:
            </h4>
            <form onSubmit={this.handleCommentSubmission}>
              <input onChange={this.handleChange} disabled={true}></input>
              <button disabled={true}>Submit</button>
            </form>
          </>
          <main>
            <CommentCard
              {...newComment}
              key="new comment"
              username={username}
            />
            {comments.map((comment) => {
              return (
                <CommentCard
                  {...comment}
                  key={comment.comment_id}
                  username={username}
                />
              );
            })}
          </main>
        </>
      );
    return (
      <>
        <h3>Comments:</h3>
        <>
          <h4>
            Readers have written {comment_count} comments below - Submit your
            comment here:
          </h4>
          <form onSubmit={this.handleCommentSubmission}>
            <input onChange={this.handleChange}></input>
            <button>Submit</button>
          </form>
        </>
        <main>
          {comments.map((comment) => {
            return (
              <CommentCard
                {...comment}
                key={comment.comment_id}
                username={username}
              />
            );
          })}
        </main>
      </>
    );
  }
  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = () => {
    api
      .getComments(this.props.article_id)
      .then((comments) => {
        this.setState({ comments, isLoading: false });
      })
      .catch((err) => {
        this.setState({ isLoading: false, err: err.response.data.msg });
      });
  };
  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ body: value });
  };

  handleCommentSubmission = (event) => {
    const { body } = this.state;
    const { username, article_id } = this.props;
    event.preventDefault();
    api.postComment(article_id, username, body).then((comment) => {
      this.setState({ newComment: comment.data.comment });
    });
  };
}

export default CommentList;
