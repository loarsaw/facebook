import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import FlagIcon from "@material-ui/icons/Flag";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from "./StateProvider";
function Header() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/FaceB.png/180px-FaceB.png"
          alt="fb"
        />
        <div className="header_input">
          <SearchIcon />
          <input placeholder="Search Facebook" type="text" />
        </div>

        <div className="header_center">
          <div className="header_option header_option--active">
            <HomeIcon fontSize="large" />
          </div>
          <div className="header_option">
            <FlagIcon fontSize="large" />
          </div>
          <div className="header_option">
            <StorefrontOutlinedIcon fontSize="large" />
          </div>
          <div className="header_option">
            <SubscriptionsOutlinedIcon fontSize="large" />
          </div>
          <div className="header_option">
            <SupervisedUserCircleIcon fontSize="large" />
          </div>
        </div>
        <div className="header_right">
          <div className="header_info">
            <Avatar src={user.photoURL} />
            <h4>{user.displayName}</h4>
          </div>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
