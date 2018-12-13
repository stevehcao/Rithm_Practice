import React from 'react';

class ToDo extends React.PureComponent {
  handleClick = evt => { this.props.delTodo(this.props.id) }

  render() {
    console.log("render ToDo", this.props.id);

    return (
      <li className="list-group-item" 
          onClick={this.handleClick}>
        {this.props.task}
        <small className="text-muted float-right">
          {this.props.cat}
        </small>
      </li>
    );
  }
}

export default ToDo;