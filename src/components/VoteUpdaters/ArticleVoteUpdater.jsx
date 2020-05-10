import React from "react";
import * as api from "../../utils/api";

class ArticleVoteUpdater extends React.Component {
  state = {
    voteDifference: 0,
  };

  render() {
    return (
      <h3>
        <button className="styledButton" onClick={() => this.handleClick(1)}>
          &#x2B06;
        </button>
        Upvotes: {this.props.votes + this.state.voteDifference}
        <button className="styledButton" onClick={() => this.handleClick(-1)}>
          &#x2B07;
        </button>
      </h3>
    );
  }

  handleClick = (voteChange) => {
    const { article_id } = this.props;
    this.setState((currentState) => {
      return { voteDifference: currentState.voteDifference + voteChange };
    });
    api.updateArticleVotes(article_id, voteChange).catch(() => {
      this.setState((currentState) => {
        return { voteDifference: currentState.voteDifference - voteChange };
      });
    });
  };
}
export default ArticleVoteUpdater;
