class Tweet extends React.Component {
  render() {
    const { username, name, date, message } = this.props;
    return (
      <div className="tweet">
        <h1>My name is {name} </h1>
        <h2>Username: {username} </h2>
        <p>{date}</p>
        <p>Message: {message}</p>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <Tweet
      name="Steve"
      username="masterlink64"
      date="7/17/18"
      message="whatever"
    />
    <Tweet name="Ash" username="ash" date="7/17/18" message="whatever1" />
    <Tweet name="Ted" username="ted" date="7/17/18" message="whatever2" />
  </div>,
  document.getElementById('root')
);
