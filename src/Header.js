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
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";
import { auth } from "./firebase";

function Header() {
  const dispatch = useDispatch();
  const logOutapp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      {/* header left */}
      <div className="header_left">
        <img src="https://i.ibb.co/47hG61V/linkedin.png" alt="linked in" />
        <div className="header_search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      {/* header right */}
      <div className="header_right">
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={MessageRounded} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption avatar title="Me" onClick={logOutapp} />
      </div>
    </div>
  );
}

export default Header;

// "https://i.ibb.co/yN3BSLJ/IMG-20210315-171207.jpg"
