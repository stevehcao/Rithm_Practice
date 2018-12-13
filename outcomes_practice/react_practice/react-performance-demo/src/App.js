import React, { Component } from 'react';
import ToDoList from './v1/ToDoList';


class App extends Component {
  render() {
    console.log("render App");

    return (
      <main className="container mt-3 mb-5">
        <ToDoList />
      </main>
    );
  }
}

export default App;