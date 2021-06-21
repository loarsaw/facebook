import {
  VideoLibrary,
  LocalHospital,
  EmojiFlags,
  People,
  Chat,
  Storefront,
  ExpandMoreOutlined,
} from "@material-ui/icons";

import React from "react";
import "./SideBar.css";
import SideBarRow from "./SideBarRow";
import { useStateValue } from "./StateProvider";
function SideBar() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <SideBarRow src={user.photoURL} title={user.displayName} />
      <SideBarRow Icon={LocalHospital} title="COVID INFO Center" />
      <SideBarRow Icon={EmojiFlags} title="Pages" />
      <SideBarRow Icon={People} title="Friends" />
      <SideBarRow Icon={Chat} title="Chats" />
      <SideBarRow Icon={Storefront} title="Friends" />
      <SideBarRow Icon={VideoLibrary} title="Friends" />
      <SideBarRow Icon={ExpandMoreOutlined} title="Friends" />
    </div>
  );
}

export default SideBar;
