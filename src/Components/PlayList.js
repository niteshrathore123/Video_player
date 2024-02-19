import React, { useState, useEffect } from 'react';
import VideoPlayer from './VideoPlayer';
import { initialVideos } from '../utils/data';
import VideoItem from './VideoItems';

const Playlist = () => {
  const [videos, setVideos] = useState(initialVideos);
  const [selectedVideo, setSelectedVideo] = useState(initialVideos[0]);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  const moveVideo = (fromIndex, toIndex) => {
    const updatedVideos = [...videos];
    const [movedVideo] = updatedVideos.splice(fromIndex, 1);
    updatedVideos.splice(toIndex, 0, movedVideo);
    setVideos(updatedVideos);
  };

  useEffect(() => {
    handleVideoSelect(initialVideos[0]);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-3/4 p-4 max-w-full">
        <h2 className="text-lg font-bold mb-4">Video Player</h2>
        {selectedVideo && (
          <VideoPlayer src={selectedVideo.src} autoplay/>
        )}
      </div>
     
      <div className="lg:w-1/4 p-4 bg-gray-800 text-white" style={{ flex: 1 }}>
        <h2 className="text-lg font-bold mb-4">Playlist</h2>
        <ul>
          {videos.map((video, index) => (
            <VideoItem key={video.id} video={video} index={index} moveVideo={moveVideo} handleVideoSelect={handleVideoSelect} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Playlist;
