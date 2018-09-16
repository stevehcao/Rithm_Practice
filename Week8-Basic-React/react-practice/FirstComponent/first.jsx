class SecondComponent extends React.Component {
  render() {
    return <h2>SECOND component</h2>;
  }
}

class FirstComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>My very FIRST COMPONENT YASSS!!!</h1>
      </div>
    );
  }
}
ReactDOM.render(<FirstComponent />, document.getElementById('root'));
