import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../utils/api";

class NavBar extends Component {
  state = {
    topics: [],
  };
  render() {
    const { topics } = this.state;
    return (
      <nav className="Nav">
        <Link to="/">Home</Link>
        {topics.map((topic) => {
          return (
            <Link to={`topics/${topic.slug}`} key={topic.slug}>
              {topic.description}
            </Link>
          );
        })}
      </nav>
    );
  }
  componentDidMount() {
    api.getTopics().then((topics) => {
      this.setState({ topics });
    });
  }
}

export default NavBar;
