import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main className="error-page container">
      <div className="error-page-content">
        <h1>ERROR</h1>
        <Link to={"/"}>Go to HomePage</Link>
      </div>
    </main>
  );
};

export default Error;
