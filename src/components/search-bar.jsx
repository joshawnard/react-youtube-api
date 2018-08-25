import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
    };
  }

  handleInputChange = (term) => {
    const { onSearchTermChange } = this.props;

    this.setState({ term });
    onSearchTermChange(term);
  }

  render() {
    const { term } = this.state;

    return (
      <div className="search-bar">
        <input
          onChange={e => this.handleInputChange(e.target.value)}
          type="text"
          value={term}
        />
      </div>
    );
  }
}

SearchBar.propTypes = {
  onSearchTermChange: PropTypes.func.isRequired,
};

export default SearchBar;
