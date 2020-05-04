import React, { Component } from "react";
import { Router } from "@reach/router";
import Title from "./components/Title";
import NavBar from "./components/NavBar";
import "./App.css";
import ArticleList from "./components/ArticleList";
import SingleArticle from "./components/SingleArticle";

class App extends Component {
  state = { user: "grumpy19" };
  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <Title user={user} />
        <NavBar />
        <Router>
          <ArticleList path="/" />
          <ArticleList path="/topics/:slug" />
          <SingleArticle path="/articles/:article_id" />
        </Router>
      </div>
    );
  }
}

export default App;
