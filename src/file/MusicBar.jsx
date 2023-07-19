import React, { useState, useEffect } from "react";

const MusicPlayer = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleTimeUpdate = (e) => {
    setCurrentTime(e.target.currentTime);
    setDuration(e.target.duration);
  };

  return (
    <div>
      <audio
        src="your-music-file-url"
        controls
        onTimeUpdate={handleTimeUpdate}
      />
      <div className="progress-bar">
        <div
          className="progress-bar__current-time"
          style={{ width: `${(currentTime / duration) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
