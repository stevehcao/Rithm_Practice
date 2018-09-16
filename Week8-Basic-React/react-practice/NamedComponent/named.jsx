class Named extends React.Component {
  render() {
    return <p>My name is {this.props.name}</p>;
  }
}

ReactDOM.render(<Named name="Steve" />, document.getElementById('root'));
