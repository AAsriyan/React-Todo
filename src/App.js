import React from 'react';
import TodoList from '../src/components/TodoComponents/TodoList';
import TodoAdd from '../src/components/TodoComponents/TodoAdd';
import TodoFooter from '../src/components/TodoComponents/TodoFooter';
import './App.css';

const todoArray = [
  {
    task: 'Learn React',
    id: 1528817077286,
    completed: false,
    display: true
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false,
    display: true
  },
  {
    task: 'Cry because didnt learn React',
    id: 1528817084359,
    completed: false,
    display: true
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
      task: '',
    }
  }

  addTodo = e => {
    e.preventDefault();

    const newTodo = {
      task: this.state.task,
      id: Date.now(),
      completed: false,
      display: true
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

  toggleTodo = todoId => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todoId === todo.id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    });
  }

  deleteTodo = e => {
    let array = [...this.state.todos];
    let index = e.target.parentNode.parentNode;
    console.log(e.target);
    console.log(e.target.parentNode);
    console.log(e.target.parentNode.parentNode);
    console.log(e.target.parentNode.parentNode.parentNode);
    this.setState({
      todos: this.state.todos.map(todo => {
        if (index) {
          return [...this.state.todos].splice(index, 1);
        } 
      })
    });
  }

  showAll = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos
    });
  }

  showActive = e => {
    e.preventDefault();
    let activeTodos = this.state.todos.filter(todo => !todo.completed)
    this.setState({
      todos: activeTodos
    });
  }

  showCompleted = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos
    });
  }

  counter = e => {
    console.log('running');
  }
  
  render() {
    return (
      <div className="app">
        <h1>todos</h1>
        <div className="list">
          <TodoAdd 
            value={this.state.task}
            addTodo={this.addTodo}
            handleChanges={this.handleChanges}
            toggleTodo={this.toggleTodo}
            deleteTodo={this.deleteTodo}
          />
          <TodoList 
            todos={this.state.todos}
            toggleTodo={this.toggleTodo}
            deleteTodo={this.deleteTodo}
          />
          <TodoFooter 
            todos={this.state.todos}
            clearCompleted={this.clearCompleted}
            showAll={this.showAll}
            showActive={this.showActive}
            deleteTodo={this.deleteTodo}
          />
        </div>
        
      </div>
    );
  }
}

export default App;
