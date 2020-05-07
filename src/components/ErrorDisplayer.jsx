import React from "react";

const ErrorDisplayer = ({ err }) => {
  return (
    <article>
      <h3>ERROR: {err ? err : "Path not found"}</h3>
    </article>
  );
};

export default ErrorDisplayer;
