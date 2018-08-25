/* eslint-disable */
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search-bar';
import VideoDetail from './components/video-detail';
import VideoList from './components/video-list';

const API_KEY = 'AIzaSyD9EWTG-IJDl4wXaBm_z7Pht7LrlNBTJ28';

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
    YTSearch({ key: API_KEY, term }, (videos) => {
      this.setState({
        selectedVideo: videos[0],
        videos,
      });
    });
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
