// need to import for JSX
import React, { Component } from 'react';

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

class JobApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      error: '' || props.error
    };

    // this will bind these functions to the JobApp component unless you use new arrow functions
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  // handle server
  // componentDidUpdate(prevProps, prevState) {
  //   if (!prevProps.error && this.props.error) {
  //     // set the error on the UX here?
  //   }
  // }

  // can handle form validation on handle submit and handle change
  // trade off between the two slow vs fast and user experience etc
  // can validate on the back end
  handleSubmit(event) {
    event.preventDefault();

    if (!validateEmail(this.state.email)) {
      this.setState({ error: 'INVALID EMAIL ADDRESS ' });
      return; // exit the handleSubmit method here so it doesn't submit
    }

    // POST to the API

    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      error: ''
    });
  }

  // dynamically change the input and the name
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  // controlled component
  // controlling state we are overriding
  // value is locked into state and we are handling the custom handle change
  render() {
    return (
      <div>
        {/* use label for accessibility semantics mark up */}
        {/* don't make () or else will happen right away */}
        <h1>Apply for Job</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            onChange={this.handleChange}
            name="firstName"
            id="firstName"
            value={this.state.firstName}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            onChange={this.handleChange}
            name="lastName"
            id="lastName"
            value={this.state.lastName}
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            onChange={this.handleChange}
            name="email"
            id="email"
            value={this.state.email}
          />
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            onChange={this.handleChange}
            name="phone"
            id="phone"
            value={this.state.phone}
          />
          <button type="submit">Submit Job App</button>
        </form>
        {this.props.error && (
          <strong className="danger">{this.props.error}</strong>
        )}
      </div>
    );
  }
}

export default JobApp;
