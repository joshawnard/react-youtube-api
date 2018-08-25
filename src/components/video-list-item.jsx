import React from 'react';
import PropTypes from 'prop-types';

const VideoListItem = ({
  onVideoSelect,
  video,
}) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li className="list-group-item">
      <button
        className="video-list media"
        onClick={() => { onVideoSelect(video); }}
        role="menuitem"
        style={{ border: 0 }}
        type="button"
      >
        <div className="media-left">
          <img src={imageUrl} className="media-object" alt="video" />
        </div>

        <div className="media-body">
          <div className="media-heading">
            {video.snippet.title}
          </div>
        </div>
      </button>
    </li>
  );
};

VideoListItem.propTypes = {
  onVideoSelect: PropTypes.func.isRequired,
  video: PropTypes.shape({}).isRequired,
};

export default VideoListItem;
