import { Avatar } from "@material-ui/core";
import React from "react";
import "./sidebar.css";

function Sidebar() {
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
        <Avatar className="sidebar_avatar" />
        <h2>Rihan Mohammed</h2>
        <h4>Student at Utkal Univercity</h4>
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
