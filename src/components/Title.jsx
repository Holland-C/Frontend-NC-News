import React from "react";

const Title = ({ username }) => {
  return (
    <header className="Header">
      <h1> NC-News</h1>
      <h2> For all your newsy needs!</h2>
      <h2 id="login"> You are currently logged in as: {username}</h2>
    </header>
  );
};

export default Title;
