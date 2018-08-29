class App extends React.Component {
  render() {
    return (
      <div>
        <Tweet
          name="Steve"
          username="masterlink64"
          date="7/17/18"
          message="whatever"
        />
        <Tweet name="Ash" username="ash" date="7/17/18" message="whatever1" />
        <Tweet name="Ted" username="ted" date="7/17/18" message="whatever2" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
