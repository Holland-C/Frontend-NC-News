import React from "react";

const Title = ({ user }) => {
  return (
    <header className="Header">
      <h1> NC-News</h1>
      <h2> For all your newsy needs!</h2>
      <h2> You are currently logged in as: {user}</h2>
    </header>
  );
};

export default Title;
