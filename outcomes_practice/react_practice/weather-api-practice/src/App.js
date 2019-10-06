import React, { Component } from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = '135f25075c0a57e8ca2b70ed13f7b061';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { city: 'London' };
  }
  // using fetch
  getWeather = async () => {
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${
      this.state.city
    }&appid=${API_KEY}&units=metric`;
    const api_call = await fetch(`${URL}`);
    const data = await api_call.json();
  };

  // using axios
  // getWeatherAxios = async () => {};

  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather />
      </div>
    );
  }
}

export default App;
