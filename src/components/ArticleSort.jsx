import React from "react";

const ArticleSort = () => {
  return (
    <form>
      <label for="sort_by">Sort by:</label>
      <select id="sort_by">
        <option value="created_at">Most recent</option>
        <option value="comment_count">Most commented</option>
        <option value="votes">Most votes</option>
      </select>
      <input type="submit" />
    </form>
  );
};

export default ArticleSort;
