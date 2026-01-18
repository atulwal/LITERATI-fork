import React from "react";
import "./Sponsors.css";
import sponsorbg from "../../assets/sponsorbg.mp4";

const Sponsors = () => {
  return (
    <section id="sponsors" className="sponsors">
              <video
                className="sponsors-bg-video"
                src={sponsorbg}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              />
            
              <div className="sponsors-overlay"> </div>
             <div className="sponsors-content">
      <h2>Our Sponsors</h2>
      <p>Coming Soon</p>
      </div>
    </section>
  );
};

export default Sponsors;
