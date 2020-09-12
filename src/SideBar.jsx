import React from "react";
import "./sidebar.css";
import SideBarOption from "./SideBarOption";

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useStateValue } from "./StateProvider";

function SideBar() {
  const [{ playlist }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <img
        className="sidebar_logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SideBarOption Icon={HomeIcon} title="Home" />
      <SideBarOption Icon={SearchIcon} title="Search" />
      <SideBarOption Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      <strong classname="sidebarTitle">PLAYLIST</strong>
      <hr />
      {console.log(playlist, "kaljdfkljl")}
      {playlist?.items?.map((playlist) => (
        <SideBarOption title={playlist.name} key={playlist.id} />
      ))}
    </div>
  );
}

export default SideBar;
