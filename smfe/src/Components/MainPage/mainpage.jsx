import { Timeline } from "@mui/icons-material";
import "./mainpage.css";
import Sidebar from "../Sidebar/sidebar";
import Topbar from "../Topbar/topbar";
import Newsfeed from "../NewsFeed/newsfeed";
import pic1 from "../pic1.jpg";

function Mainpage() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src="/src/Components/pic1.jpg" alt="" />
              <img className="profileUserImg" src="assets/person/7.jpeg" alt="" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">User</h4>
              <span className="profileInfoDesc">Hello!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Newsfeed />
          </div>
        </div>
      </div>
    </>
  );
}

export default Mainpage;
