import React from "react";
import Landing from "./pages/Landing";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import "./App.css";

function App() {
  return (
    <div>
      <AudioPlayer />
      <Landing />
    </div>
  );
}

export default App;