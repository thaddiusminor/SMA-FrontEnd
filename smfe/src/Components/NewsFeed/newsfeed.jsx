import React, { useState, useEffect } from "react";
import Post from "../Post/post";
import Status from "../StatusBox/status";
import "./newsfeed.css";
import pic1 from "../pic1.jpg";
import axios from "axios";

function Newsfeed() {
  // // //RETRIEVE POST//
  // // const getPost = () =>{
  //   axios.get("http://localhost:5000/api/view/email")
  const [statuses, setStatuses] = useState([]);
  const email = localStorage.getItem("email");
  useEffect(() => {
    axios.get(`http://localhost:5000/api/users/view/${email}`).then((res) => {
      setStatuses(res.data);
    });
  }, []);
  console.log(statuses);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Status />
        {statuses.map((status, index) => (
          <Post key={index} post={status} />
        ))}
      </div>
    </div>
  );
}

export default Newsfeed;
