import React from "react";
import Post from "../Post/post";
import Status from "../StatusBox/status";
import "./newsfeed.css";
import pic1 from "../pic1.jpg";
import axios from "axios";

function Newsfeed() {
  // // //RETRIEVE POST//
  // // const getPost = () =>{
  //   axios.get("http://localhost:5000/api/view/email")

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
