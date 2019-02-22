/* eslint-disable */
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-v3-search';

import SearchBar from './components/search-bar';
import VideoDetail from './components/video-detail';
import VideoList from './components/video-list';

const API_KEY = 'AIzaSyBQau0d4ij46QzynxJeFdWRo5DvWv_dC-Y';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedVideo: null,
      videos: [],
    };

    this.videoSearch('skyrim');
  }


  videoSearch = (term) => {
    YTSearch(
      API_KEY,
      {
        q: term,
        part: 'snippet',
        type: 'video',
      },
      (response, videos) => {
        this.setState({
          selectedVideo: videos.items[0],
          videos: videos.items,
        });
      }
    );
  }

  onVideoSelect = (selectedVideo) => {
    this.setState({ selectedVideo });
  }

  render() {
    const { selectedVideo, videos } = this.state;

    const videoSearch = _.debounce((term) => {
      this.videoSearch(term);
    }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={term => videoSearch(term)} />
        <VideoDetail video={selectedVideo} />
        <VideoList onVideoSelect={this.onVideoSelect} videos={videos} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
