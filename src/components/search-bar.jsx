import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ searchValue: e.target.value });
  }

  render() {
    const { searchValue } = this.state;

    return (
      <div>
        <input
          onChange={this.handleInputChange}
          type="text"
          value={searchValue}
        />
      </div>
    );
  }
}

export default SearchBar;
