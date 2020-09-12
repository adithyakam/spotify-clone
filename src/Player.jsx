import React from "react";
import SideBar from "./SideBar";
import Body from "./Body";
import Footer from "./Footer";
import "./player.css";

function Player() {
  return (
    <div className="player">
      <div className="player_body">
        <SideBar />
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default Player;
