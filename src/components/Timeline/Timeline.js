import React from "react";
import Chat from "../GroupChat/GroupChat";
import Avatar from "../Avatar/Avatar";
import "./Timeline.css";

function Timeline({ posts }) {
  return (
    <ul className="timeline w-100 mt-2">
      {posts?.map(({ username, message }) => (
        <li className="timeline-item small_size listyle-none">
          <div className="d-flex ">
            <Avatar imageUrl="https://www.gravatar.com/avatar/4184d0175a931e706080351239ac19b0?s=150&r=g&d=mm" />
            <Chat user={username}>{message}</Chat>
          </div>
          <div className="separator"></div>
        </li>
      ))}
    </ul>
  );
}

export default Timeline;
