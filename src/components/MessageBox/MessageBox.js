import React from "react";
import ComposeForm from "../ComposeForm/ComposeForm";
import Timeline from "../Timeline/Timeline";

const MessageBox = ({ username, id, teamId, posts, isTeam, isFriend, member }) => {
  console.log(isFriend);
  return (
    <div className="post-container ">
      <ComposeForm username={username} id={id} teamId={teamId} isTeam={isTeam} isFriend={isFriend} member={member} />
      <Timeline posts={posts} />
    </div>
  );
};

export default MessageBox;
