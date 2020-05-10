import React, { Component } from "react";

class ArticleSortForm extends Component {
  state = {
    sort_by: "",
  };
  render() {
    return (
      <form id="sort_by" onSubmit={this.handleSortSubmission}>
        <label form="sort_by">Sort by:</label>
        <select onChange={this.handleChange}>
          <option value="created_at">Most recent</option>
          <option value="comment_count">Most commented</option>
          <option value="votes">Most votes</option>
        </select>
        <input type="submit" />
      </form>
    );
  }
  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ sort_by: value });
  };

  handleSortSubmission = (event) => {
    const { fetchArticles } = this.props;
    event.preventDefault();
    fetchArticles(this.state.sort_by);
  };
}

export default ArticleSortForm;
