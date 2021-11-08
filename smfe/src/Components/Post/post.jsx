import React from "react";
import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { useState, useEffect } from "react";
import Avatar from "@mui/icons-material";

function Post({ post }) {
  // const [like, setLike] = useState(post.like);
  // const [isLiked, setIsLiked] = useState(false);

  // const likeHandler = () => {
  //   setLike(isLiked ? like - 1 : like + 1);
  //   setIsLiked(!isLiked);

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              // src=Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">
              {/* {Users.filter((u) => u.id === post?.userId)[0].username} */}
            </span>
            <span className="postDate"></span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.text}</span>
          <img className="" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="images/Allied-paratroopers.jpg" alt="" />
            <img className="likeIcon" src="assets/heart.png" alt="" />
            <span className="postLikeCounter"> people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText"> comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
