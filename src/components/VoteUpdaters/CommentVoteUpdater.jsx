import React from "react";
import * as api from "../../utils/api";

class CommentVoteUpdater extends React.Component {
  state = {
    voteDifference: 0,
    beenClicked: false,
  };

  render() {
    return (
      <h3>
        <button
          className="styledButton"
          onClick={() => this.handleClick(1)}
          disabled={this.state.beenClicked}
        >
          &#x2B06;
        </button>{" "}
        Upvotes: {this.props.votes + this.state.voteDifference}{" "}
        <button
          className="styledButton"
          onClick={() => this.handleClick(-1)}
          disabled={this.state.beenClicked}
        >
          &#x2B07;
        </button>
      </h3>
    );
  }

  handleClick = (voteChange) => {
    const { comment_id } = this.props;
    this.setState((currentState) => {
      return {
        voteDifference: currentState.voteDifference + voteChange,
        beenClicked: true,
      };
    });
    api.updateCommentVotes(comment_id, voteChange).catch(() => {
      this.setState((currentState) => {
        return { voteDifference: currentState.voteDifference - voteChange };
      });
    });
  };
}
export default CommentVoteUpdater;
