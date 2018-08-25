import React from 'react';
import PropTypes from 'prop-types';
import VideoListItem from './video-list-item';

const VideoList = ({
  onVideoSelect,
  videos,
}) => {
  const videoItems = videos.map((video) => {
    return (
      <VideoListItem
        key={video.etag}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

VideoList.propTypes = {
  onVideoSelect: PropTypes.func.isRequired,
  videos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default VideoList;
