import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./header.css";
import HeaderOption from "./HeaderOption";
import {
  Home,
  SupervisorAccount,
  BusinessCenter,
  Notifications,
  MessageRounded,
} from "@material-ui/icons";

function Header() {
  return (
    <div className="header">
      {/* header left */}
      <div className="header_left">
        <img src="https://i.ibb.co/47hG61V/linkedin.png" alt="linked in" />
        <div className="header_search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      {/* header right */}
      <div className="header_right">
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={MessageRounded} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption
          avatar="https://i.ibb.co/yN3BSLJ/IMG-20210315-171207.jpg"
          title="Me"
        />
      </div>
    </div>
  );
}

export default Header;
