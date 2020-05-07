import React from "react";
import * as api from "../../utils/api";

class ArticleVoteUpdater extends React.Component {
  state = {
    voteDifference: 0,
  };

  render() {
    return (
      <div>
        <button onClick={() => this.handleClick(1)}>Vote UP</button>
        <h3>Upvotes: {this.props.votes + this.state.voteDifference}</h3>
        <button onClick={() => this.handleClick(-1)}>Vote DOWN</button>
      </div>
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
