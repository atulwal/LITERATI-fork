import React from 'react';
import ProfileHeader from '../components/Profile/ProfileHeader';
import ScoreBreakdown from '../components/Profile/ScoreBreakdown';
import QuestOverview from '../components/Profile/QuestOverview';
import ScoreHistory from '../components/Profile/ScoreHistory';
import Leaderboard from '../components/Profile/Leaderboard';
import '../styles/Profile.css';
const Profile = () => {
  return (
    <div className="app-container">
      {/* Navigation Header */}
      {/* <header className="app-header">
        <div className="logo">LitFest 2026</div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#events">Events</a>
          <a href="#speakers">Speakers</a>
          <a href="#timeline">Timeline</a>
          <button className="register-btn">Register</button>
        </nav>
      </header> */}

      {/* Main Content */}
      <main className="profile-content">
        <ProfileHeader />
        {/* <ScoreBreakdown /> */}
        {/* <QuestOverview /> */}
        
        <div className="bottom-grid">
          {/* <ScoreHistory /> */}
          {/* <Leaderboard /> */}
        </div>
      </main>
    </div>
  );
}

export default Profile