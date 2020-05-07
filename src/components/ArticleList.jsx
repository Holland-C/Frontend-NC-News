import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import Loader from "./Loader";
import * as api from "../utils/api";
import ErrorDisplayer from "./ErrorDisplayer";
import ArticleSortForm from "./ArticleSortForm";

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    err: "",
  };
  render() {
    const { articles, isLoading, err } = this.state;
    if (isLoading) return <Loader />;
    if (err) return <ErrorDisplayer err={err} />;
    return (
      <>
        <ArticleSortForm fetchArticles={this.fetchArticles} />
        <main>
          {articles.map((article) => {
            return <ArticleCard {...article} key={article.article_id} />;
          })}
        </main>
      </>
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
  fetchArticles = (sort_by) => {
    api
      .getArticles(this.props.slug, sort_by)
      .then((articles) => {
        this.setState({ articles, isLoading: false });
      })
      .catch((err) => {
        this.setState({ isLoading: false, err: err.response.data.msg });
      });
  };
}

export default ArticleList;
