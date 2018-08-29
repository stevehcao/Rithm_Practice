import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
// import './App.css';

const Welcome = props => {
  return (
    <div>
      <h1>hello world</h1>
      <Link to="/about"> Go to About</Link>
    </div>
  );
};
const About = props => {
  return (
    <div>
      <h1>What about what about</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
};
const Contact = props => {
  return (
    <div>
      <span>{JSON.stringify(props)}</span>
      <h1>Contact me to hire!</h1>
    </div>
  );
};
const Secret = props => {
  return (
    <div>
      <img src={props.gif} alt="#" />
    </div>
  );
};
const Topics = props => {
  const stuff = ['politics', 'sports', 'music', 'coding'];
  /**
   * Programmatically generate routes for everything in stuff'
   * /topics/politics
   * /topics/sports
   * iterate through list of stuff
   */

  return (
    <div>
      <h1>More Routes Here</h1>
      <ul>
        {stuff.map(topic => {
          return (
            <li>
              <Link to={`/topics/${topic}`}>{topic}</Link>
            </li>
          );
        })}
        {stuff.map(i => (
          <Route
            key={i}
            exact
            path={`/topics/${i}`}
            component={props => (
              <div>
                <h1>{`The topic is ${i}`}</h1>
              </div>
            )}
          />
        ))}
      </ul>
    </div>
  );
};
const Greet = ({ match }) => {
  // const { match } = props;
  return (
    <div>
      {/* if you don't destructure: props.match.params.name */}
      <h2>hello {match.params.name}</h2>
    </div>
  );
};
const Greet2 = props => {
  const params = new URLSearchParams(props.location.search);
  const name = params.get('name');
  return (
    <div>
      <h2>{`hola ${name || 'stranger'}`}</h2>
    </div>
  );
};
class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route
          exact
          path="/secret"
          component={routeProps => (
            <Secret
              gif="https://media.giphy.com/media/4m4Z29t0Lq0Sc/giphy.gif"
              {...routeProps}
            />
          )}
        />
        <Route path="/topics" component={Topics} />
        <Route exact path="/hello/:name" component={Greet} />
        <Route exact path="/hola" component={Greet2} />
      </div>
    );
  }
}

export default App;
