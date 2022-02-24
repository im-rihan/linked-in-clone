import { Avatar } from "@material-ui/core";
import {
  ChatOutlined,
  SendOutlined,
  ShareOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import React, { forwardRef } from "react";
import FeedInputOption from "./FeedInputOption";
import "./post.css";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post_header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post_info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post_body">
        <p>{message}</p>
      </div>
      <div className="post_bottom">
        <FeedInputOption Icon={ThumbUpAltOutlined} title="Like" color="gray" />
        <FeedInputOption Icon={ChatOutlined} title="Comment" color="gray" />
        <FeedInputOption Icon={ShareOutlined} title="Share" color="gray" />
        <FeedInputOption Icon={SendOutlined} title="Send" color="gray" />
      </div>
    </div>
  );
});

export default Post;
