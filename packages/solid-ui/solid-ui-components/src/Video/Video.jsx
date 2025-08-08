import React from 'react'

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="video">
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      width="1000"
      height="565"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture loop"
      autoplay={true}
      // frameBorder="0"
    />
  </div>
)
export default Video
