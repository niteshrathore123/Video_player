import React, { useState, useRef, useEffect } from 'react';

const VideoPlayer = ({ src, autoplay }) => {
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [videoWidth, setVideoWidth] = useState('auto');
  const [videoHeight, setVideoHeight] = useState('auto');
  const videoRef = useRef(null);

  useEffect(() => {
    if (autoplay) {
      videoRef.current.muted = true;
    }
  }, [autoplay]);

  

  const handleMetadataLoaded = () => {
    setVideoWidth(videoRef.current.videoWidth);
    setVideoHeight(videoRef.current.videoHeight);
  };

  const handleSpeedChange = (speed) => {
    setPlaybackSpeed(speed);
    videoRef.current.playbackRate = speed;
  };

  return (
    <div>
      <video
        ref={videoRef}
        src={src}
        autoPlay={autoplay}
        controls
        onLoadedMetadata={handleMetadataLoaded}
        width={videoWidth}
        height={videoHeight}
      ></video>

      <div>
        <label>Speed:</label>
        <select
          value={playbackSpeed}
          onChange={(e) => handleSpeedChange(parseFloat(e.target.value))}
        >
          <option value="0.5">0.5x</option>
          <option value="1">1x</option>
          <option value="1.5">1.5x</option>
          <option value="2">2x</option>
        </select>
      </div>
    </div>
  );
};

export default VideoPlayer;
