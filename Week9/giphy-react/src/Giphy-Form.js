import React, { Component } from 'react';

export default class GiphyForm extends Component {
  state = {
    search: ''
  };

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  searchGIF = evt => {
    evt.preventDefault();
    // need to send info to up to parent
    // use a function from parent lift state up
  };
  render() {
    // needs to render form
    return (
      <div className="GiphyForm">
        <form onSubmit={this.searchGIF}>
          <label htmlFor="search">Search: </label>
          {/* on change will handle state change with react */}
          <input
            type="text"
            name="search"
            onChange={this.handleChange}
            value={this.state.search}
          />
          <button>Search for a GIF</button>
        </form>
      </div>
    );
  }
}
