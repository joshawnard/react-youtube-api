import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search-bar';
import VideoList from './components/video-list';

const API_KEY = 'AIzaSyD9EWTG-IJDl4wXaBm_z7Pht7LrlNBTJ28';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
    };

    YTSearch({ key: API_KEY, term: 'skyrim' }, (videos) => {
      this.setState({ videos });
    });
  }

  // setVideos = (videos) => {
  //   this.setState({ videos });
  // }

  render() {
    const { videos } = this.state;

    return (
      <div>
        <SearchBar />
        <VideoList videos={videos} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
