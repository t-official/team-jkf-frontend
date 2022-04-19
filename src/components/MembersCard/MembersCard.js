import React, { useState } from "react";
import "./MembersCard.css";
import profile from "../../Images/profile.jpg";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFriend, acceptInvite, deleteInvite } from "../../Redux/actions/friends";

const MembersCard = ({ name, isFriend, memberId, isrequest, currentUserId, Id, requestsent, teams }) => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.friendsReducer);
  const sendRequest = () => {
    dispatch(addFriend({ fromId: currentUserId, toId: memberId }));
    setButtonValue("Request Sent");
  };

  const acceptRequest = () => {
    dispatch(acceptInvite({ fromId: currentUserId, toId: memberId }));
    setButtonValue("Request Sent");
  };
  const declineRequest = () => {
    dispatch(deleteInvite({ fromId: currentUserId, toId: memberId }));
    setButtonValue("Request Sent");
  };

  const [buttonValue, setButtonValue] = useState("AddFriend");

  return (
    <div className="member__container">
      <div className="member__details">
        <div className="profile__image">
          <Link to={`/community/users/${memberId}`}>
            <img src={profile} alt="image1" style={{ cursor: "pointer" }} />
          </Link>
          <h6 style={{ textTransform: "uppercase" }} className="mb-0">
            {name}
          </h6>
          <p className="small_size -mt-3" style={{ fontFamily: '"Roboto", sans-serif' }}>
            {Id}
          </p>
        </div>
        <p className="activity">Active 5 days, 4 hours ago</p>
      </div>
      {isrequest ? (
        <div className="d-flex flex-column align-center justify-center gap-2">
          <button className="friend__btn btn-primary" onClick={acceptRequest}>
            ACCEPT
          </button>
          <button className="friend__btn btn-danger" onClick={declineRequest}>
            DECLINE
          </button>
        </div>
      ) : requestsent ? (
        <div>
          <button className="friend__btn" disabled>
            {buttonValue}
          </button>
        </div>
      ) : teams ? (
        <div>
          <button className="friend__btn btn-primary" onClick={sendRequest}>
            Join Team
          </button>
        </div>
      ) : !isFriend ? (
        <div>
          <button className="friend__btn btn-primary" onClick={sendRequest}>
            {buttonValue}
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default MembersCard;
