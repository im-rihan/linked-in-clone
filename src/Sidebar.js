import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./sidebar.css";

function Sidebar() {
  const user = useSelector(selectUser);
  const recentItem = (item) => {
    return (
      <div className="sidebar_recentItem">
        <span className="sidebar_hash">#</span>
        <p>{item}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://i.ibb.co/gtTcH2W/willian-justen-de-vasconcellos-MMP5j-f-Cqw-unsplash.jpg "
          alt="linear-gradient-img"
        />
        <Avatar src={user.photoUrl} className="sidebar_avatar">
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who Viewed You</p>
          <p className="sidebar_statNumber">1,000</p>
        </div>
        <div className="sidebar_stat">
          <p>Views On Posts</p>
          <p className="sidebar_statNumber">1,000</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("React js")}
        {recentItem("React js")}
        {recentItem("React js")}
      </div>
    </div>
  );
}

export default Sidebar;

// 1.20.17
