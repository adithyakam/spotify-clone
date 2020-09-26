import React from "react";
import SideBar from "./SideBar";
import Body from "./Body";
import Footer from "./Footer";
import "./player.css";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player_body">
        <SideBar />
        <Body spotify={spotify} />
      </div>
      <Footer spotify={spotify} />
    </div>
  );
}

export default Player;
