import React, { useEffect } from "react";
import "./Community.css";
import { Link } from "react-router-dom";
import MembersCard from "../../MembersCard/MembersCard";
import Team1 from "../../../Images/Team1_logo.png";
import Team2 from "../../../Images/Team2_logo.png";
import NavSearch from "../../NavSearch/NavSearch";
import { Footer } from "../index";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import LoadState from "../../Spinner/LoadState";
import { getUserTeams } from "../../../Redux/actions/users";

const Community = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("result"));
  const { isloading, userTeams } = useSelector(
    (state) => state.userTeamsReducer
  );

  console.log(userTeams);

  useEffect(() => {
    if (user) dispatch(getUserTeams());
  }, []);

  return (
    <div>
      <div className="title">
        <p>Community</p>
      </div>
      <div className="community__container">
        <div className="section__1">
          <div className="links">
            <p>Links</p>
            <hr />
            <ul>
              <li>
                <Link
                  to="/timeline"
                  className="text-decoration-none text-dark"
                  style={{ marginLeft: "auto" }}
                >
                  My Timeline
                </Link>
              </li>
              <li>
                <Link
                  to="/update-profile"
                  className="text-decoration-none text-dark"
                  style={{ marginLeft: "auto" }}
                >
                  Update Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/notification"
                  className="text-decoration-none text-dark"
                  style={{ marginLeft: "auto" }}
                >
                  Notifications
                </Link>
              </li>
              <li>
                <Link
                  to="/messages"
                  className="text-decoration-none text-dark"
                  style={{ marginLeft: "auto" }}
                >
                  Messages
                </Link>
              </li>
              <li>
                <Link
                  to="/group_lists"
                  className="text-decoration-none text-dark"
                  style={{ marginLeft: "auto" }}
                >
                  Join Groups
                </Link>
              </li>
              <li>
                <Link
                  to="/friends_list"
                  className="text-decoration-none text-dark"
                  style={{ marginLeft: "auto" }}
                >
                  Friend Lists
                </Link>
              </li>
              <li>
                <Link
                  to="/invitations"
                  className="text-decoration-none text-dark"
                  style={{ marginLeft: "auto" }}
                >
                  Invitations
                </Link>
              </li>
            </ul>
          </div>
          <div className="groups">
            <p>TJKF Groups (States)</p>
            <hr />
            <div className="filter">
              Newest |
              <span>
                <strong> Active </strong>
              </span>
              | Popular | Alphabetical
            </div>
            <div className="group">
              <div className="group__logo">
                <img src={Team1} alt="My logo" />
              </div>
              <div className="group__details">
                <p>Team JKF Oyo</p>
                <p>Active 5 days, 4 hours ago</p>
              </div>
            </div>
            <div className="group">
              <div className="group__logo">
                <img src={Team2} alt="My logo" />
              </div>
              <div className="group__details">
                <p>TeamJKF Ekiti</p>
                <p> Active 7 months ago</p>
              </div>
            </div>
          </div>
          <div className="updates">
            <p>Latest Updates</p>
            <hr />
            <div className="widget-error">
              <p>
                Sorry, there was no activity found. Please try a different
                filter.
              </p>
            </div>
          </div>
        </div>
        <div className="section__2">
          <h2>TJKF Community </h2>
          <div className="active">
            <div>
              Active Members <span>6</span>
            </div>
          </div>
          <div className="subnav">
            <NavSearch />
            <div className="status ">
              <select name="status" id="">
                <option value="Last Active">Last Active</option>
                <option value="Newest Registered">Newest Registered</option>
                <option value="Alphabetical">Alphabetical</option>
              </select>
            </div>
          </div>
          <p>Viewing 1 - 6 of 6 active members</p>
          <div className="members__card">
            <MembersCard name="Akinola Akinyemi Emmaneul" friend={true} />
            <MembersCard name="Akinola Akinyemi Emmaneul" friend={false} />
            <MembersCard name="Akinola Akinyemi Emmaneul" friend={true} />
            <MembersCard name="Akinola Akinyemi Emmaneul" friend={true} />
            <MembersCard name="Akinola Akinyemi Emmaneul" friend={true} />

            {/* {active_members.map(() => {
              <MembersCard
                name="Akinola Akinyemi Emmaneul"
                friend={true}
                Id={user_id}
                imageUrl={imageUrl}
              />;
            })} */}
          </div>
          <p>Viewing 1 - 6 of 6 active members</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Community;
