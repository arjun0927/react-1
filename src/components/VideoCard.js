import React from "react";
import "../style/videoCard.css";
const playbutton = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
    <polygon
      class="play-btn__svg"
      width="32px"
      height="32px"
      points="9.33 6.69 9.33 19.39 19.3 13.04 9.33 6.69"
    />
    <path
      class="play-btn__svg"
      d="M26,13A13,13,0,1,1,13,0,13,13,0,0,1,26,13ZM13,2.18A10.89,10.89,0,1,0,23.84,13.06,10.89,10.89,0,0,0,13,2.18Z"
    />
  </svg>
);
function VideoCard({ image, name, index }) {
  return (
    <>
      <div className="videoCard" style={{ backgroundImage: `url(${image})` }}>
        <a href="/">{playbutton}</a>
        <p>{name}</p>
      </div>
    </>
  );
}

export default VideoCard;
