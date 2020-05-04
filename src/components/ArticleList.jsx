import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import Loader from "./Loader";
import * as api from "../utils/api";

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
  };
  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) return <Loader />;
    return (
      <main>
        {articles.map((article) => {
          return <ArticleCard {...article} key={article.article_id} />;
        })}
      </main>
    );
  }
  componentDidMount() {
    this.fetchArticles();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.slug !== this.props.slug) {
      this.fetchArticles();
    }
  }
  fetchArticles = () => {
    api.getArticles(this.props.slug).then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  };
}

export default ArticleList;
