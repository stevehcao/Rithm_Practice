import React, { PureComponent } from 'react';

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

class JobApp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      error: '' || props.error
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

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

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
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
        {this.state.error && (
          <strong className="danger">{this.state.error}</strong>
        )}
      </div>
    );
  }
}

export default JobApp;
