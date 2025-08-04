import React from "react";
import ProfileCard from "./ProfileCard";
import "./styles.css";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: "50px",
      }}
    >
      <ProfileCard
        name="Zanele Skosana"
        title="Web Developer"
        image="https://via.placeholder.com/150"
        bio="zanele2411@outlook.com"
      />
      <ProfileCard
        name="Lucia Skosana"
        title="Team Member"
        image="https://via.placeholder.com/150"
        bio="lucia11@gmail.com"
      />
    </div>
  );
}
