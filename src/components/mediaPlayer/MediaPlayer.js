import React from "react";
// redux
import { useSelector } from "react-redux";

function MediaPlayer() {
  const path = useSelector((state) => state.media.path);
  const media = useSelector((state) => state.media.media);

  return (
    <div className='p-3'>
      <h1>Media Player</h1>
      <audio controls>
        <source src={`${path}${media[1].src}`} type='audio/mpeg' />
      </audio>
      <h1>Video</h1>
      <video controls width='640px' height='360px'>
        <source src={`${path}${media[0].src}`} type='video/mp4' />
      </video>
    </div>
  );
}

export default MediaPlayer;
