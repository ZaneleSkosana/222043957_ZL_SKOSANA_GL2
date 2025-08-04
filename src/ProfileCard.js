import React from "react";
import "./styles.css";

function ProfileCard(props) {
  return (
    <div className="card">
      <img className="profile-image" src={props.image} alt="Profile" />
      <h2>{props.name}</h2>
      <h4>{props.title}</h4>
      <p>{props.bio}</p>
    </div>
  );
}

export default ProfileCard;
