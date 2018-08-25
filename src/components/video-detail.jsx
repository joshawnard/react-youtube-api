import React from 'react';
import PropTypes from 'prop-types';

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div>
        Loading ...
      </div>
    );
  }

  const { videoId } = video.id;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe src={url} className="embed-responsive-item" title={video.etag} />
      </div>

      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

VideoDetail.defaultProps = {
  video: undefined,
};

VideoDetail.propTypes = {
  video: PropTypes.shape({
    etag: PropTypes.string,
    id: {},
    kind: PropTypes.string,
    snippet: {},
  }),
};

export default VideoDetail;
