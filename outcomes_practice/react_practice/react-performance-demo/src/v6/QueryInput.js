import React from 'react';

class QueryInput extends React.PureComponent {
  state = {term: ""}

  /* handle form elements */

  changeTerm = (evt) => { 
    this.setState({term: evt.target.value});
    this.props.setQuery(evt.target.value);
  }

  render() {
    console.log("render QueryInput", this.state);

    return <input onChange={this.changeTerm}
                  value={this.state.term}
                  placeholder="filter"
                  className="searchBox" />
  }
}


export default QueryInput;