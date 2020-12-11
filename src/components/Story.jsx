import { Avatar } from "@material-ui/core";
import React from "react";
import "../styles/Story.css";

export default function Story({ image, profileSrc, title }) {
  return (
    <div className="story" style={{ backgroundImage: `url(${image})` }}>
      <Avatar src={profileSrc} className="story__avatar" />
      <h4>{title} </h4>
    </div>
  );
}
