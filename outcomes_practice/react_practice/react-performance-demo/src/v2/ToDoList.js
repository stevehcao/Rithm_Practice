import React from 'react';
import ToDo from './ToDo';
import sampleTodos from '../sampleTodos';
import QueryInput from './QueryInput';
import AddForm from './AddForm';

class ToDoList extends React.Component {
  state = {
    todos: sampleTodos,
    query: "",
  }

  /* update query */

  setQuery = query => { this.setState({query}) };

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
          <QueryInput setQuery={this.setQuery} />
          <h2>Todo Items v2</h2>
        </div>

        <ul className="list-group">
          {todos.map(t => <ToDo id={t.id}
                                task={t.task}
                                cat={t.cat}
                                delTodo={this.delTodo} />)}
        </ul>

        <AddForm addNewTodo={this.addNewTodo} />    
      </section>
    )
  }
}


export default ToDoList;