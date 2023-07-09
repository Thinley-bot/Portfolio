import React from 'react'
import './Youtube.css'

const Youtube = ({embedId}) => {
  return (
    <div className="video-responsive">
    <span>Final Year Project</span>
    <iframe
      width="500"
      height="250"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
    
  );
}
export default Youtube;
