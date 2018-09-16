class Person extends React.Component {
  render() {
    const { name, age, hobbies } = this.props;
    return (
      <div className="person">
        <p>Learn some information about this person</p>
        <h3>{age > 18 ? 'go vote!' : 'you must be 18 to vote'}</h3>
        <p>{name.length > 6 ? name.slice(0, 6) : name}</p>
        <ul>{hobbies.map(hobby => <li key={hobby}> {hobby} </li>)}</ul>
      </div>
    );
  }
}
