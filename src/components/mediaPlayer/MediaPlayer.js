import React from 'react';
// redux
import { useSelector } from 'react-redux';

function MediaPlayer() {
  console.log(useSelector((state) => state.media));
  const path = useSelector((state) => state.media.path);
  const media = useSelector((state) => state.media.media);
  console.log(path);
  return (
    <div className="p-3">
      <h1>Media Player</h1>
      <audio controls>
        <source src={`${path}${media[1].src}`} type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default MediaPlayer;
