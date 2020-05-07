import React, { Component } from "react";
import { Router } from "@reach/router";
import Title from "./components/Title";
import NavBar from "./components/NavBar";
import "./App.css";
import ArticleList from "./components/ArticleList";
import SingleArticle from "./components/SingleArticle";
import ErrorDisplayer from "./components/ErrorDisplayer";

class App extends Component {
  state = { username: "grumpy19" };
  render() {
    const { username } = this.state;
    return (
      <div className="App">
        <Title username={username} />
        <NavBar />
        <Router>
          <ArticleList path="/" />
          <ArticleList path="/topics/:slug" />
          <SingleArticle path="/articles/:article_id" username={username} />
          <ErrorDisplayer default />
        </Router>
      </div>
    );
  }
}

export default App;
