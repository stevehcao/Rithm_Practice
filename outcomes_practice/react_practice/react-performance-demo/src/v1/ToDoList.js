import React from 'react';
import ToDo from './ToDo';
import sampleTodos from '../sampleTodos';

let id = 100;  // unique ID for todos

class ToDoList extends React.Component {
  state = {
    todos: sampleTodos,
    query: "",
    task: "",
    cat: "Home",
  }

  /* handle form elements */

  changeQuery = (evt) => { this.setState({ query: evt.target.value }) }
  changeTask = (evt) => { this.setState({ task: evt.target.value }) }
  changeCat = (evt) => { this.setState({ cat: evt.target.value }) }

  handleSubmitNew = (evt) => {
    evt.preventDefault();
    let { task, cat } = this.state;
    this.addNewTodo({ id: ++id, task, cat });
  }

  /* add/delete todos */

  addNewTodo = (newTodo) => {
    this.setState(st => ({
      todos: [...st.todos, newTodo],
      task: "",
      cat: "",
    }))
  }

  delTodo = (id) => {
    this.setState(st => 
      ({ todos: st.todos.filter(t => t.id !== id) }));
  }

  /* render query box, todo list, new-todo form */

  render() {
    console.log("render ToDoList", this.state);

    let todos = this.state.todos;
    let q = this.state.query.toLowerCase();
    if (q) {
      todos = todos.filter(t => t.task.toLowerCase().includes(q))
    }

    return (
      <section>

        <div>
          <input onChange={this.changeQuery}
                 value={q}
                 placeholder="filter"
                 className="searchBox" />
          <h2>Todo Items v1</h2>
        </div>

        <ul className="list-group">
          {todos.map(t => <ToDo id={t.id}
                                task={t.task}
                                cat={t.cat}
                                delTodo={this.delTodo} />)}
        </ul>

        <form onSubmit={this.handleSubmitNew} 
              className="form-inline mt-3">
          <input className="form-control mr-2" 
                 onChange={this.changeTask} 
                 placeholder="(New Todo)"
                 value={this.state.task} />         
          <select className="form-control mr-2"  
                  onChange={this.changeCat} 
                  value={this.state.cat}>
            <option>Home</option>
            <option>Work</option>
          </select>    
          <button className="btn btn-primary">Add</button>
        </form>

      </section>
    )
  }
}


export default ToDoList;