import React from "react";
import Post from "../Post/post";
import Status from "../StatusBox/status";
import "./newsfeed.css";

function Newsfeed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Status />
        <Post />
      </div>
    </div>
  );
}

export default Newsfeed;
