import React from 'react';

let id = 100;  // unique ID for todos

class AddForm extends React.Component {
  state = {
    task: "",
    cat: "Home",
  }

  /* handle form elements */

  changeTask = (evt) => { this.setState({ task: evt.target.value }) }
  changeCat = (evt) => { this.setState({ cat: evt.target.value }) }

  handleSubmitNew = (evt) => {
    evt.preventDefault();
    let { task, cat } = this.state;
    this.props.addNewTodo({ id: ++id, task, cat });
    this.setState({task: "", cat: "Home"});
  }

  render() {
    console.log("render AddForm", this.state);

    return (
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
    );
  }
}


export default AddForm;