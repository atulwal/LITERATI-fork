import React from "react";
import LeaderboardProxy from "./LeaderboardProxy";
import Leaderboard from "../components/Dashboard/Leaderboard";
import forest from "../assets/forest.jfif";
import "../styles/Dashboard.css";
import Profile from "./Profile";

function publicLB() {
  return (
    <div className="dashboard">
      <img
        src={forest}
        alt="background"
        className="dashboard-bg"
      />

      <div className="dashboard-overlay" />

      <div className="dashboard-content">
        <Leaderboard />
      </div>
    </div>
  );
}

export default publicLB;
