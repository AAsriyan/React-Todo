import React from 'react';
import TodoList from '../src/components/TodoComponents/TodoList';
import TodoForm from '../src/components/TodoComponents/TodoForm';


const todoArray = [
  {
    task: 'Learn React',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Cry because didnt learn React',
    id: 1528817084359,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todoArray,
      task: ''
    }
  }

  addTodo = e => {
    e.preventDefault();

    const newTodo = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, newTodo],
      task: ''
    })
  };

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
          todos={this.state.todos}
        />
        <TodoForm 
          value={this.state.task}
          addTodo={this.addTodo}
          handleChanges={this.handleChanges}
        />
      </div>
    );
  }
}

export default App;
