import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./header.css";

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
    </div>
  );
}

export default Header;
