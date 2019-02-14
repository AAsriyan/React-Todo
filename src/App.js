import React from 'react';
import TodoList from '../src/components/TodoComponents/TodoList';
import TodoForm from '../src/components/TodoComponents/TodoForm';
import TodoAdd from '../src/components/TodoComponents/TodoAdd';
import TodoFooter from '../src/components/TodoComponents/TodoFooter';
import './App.css';

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
      task: '',
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

  deleteTodo = e => {
    console.log(e.target)
    let todosArray = {...this.state.todos};
    console.log(todosArray[0].completed)
    //let index = todosArray.indexOf(e.target.value);
    // if (index !== -1) {
    //   todosArray.splice(index, 1);
    //   this.setState({todos: todosArray});
    // }
    // this.setState({
    //   todos: this.state.todos.splice(e.target.value, 1)
    // })
  }

  // toggleComplete = e => {
    
  //   let todosArray = {...this.state.todos};
  //   console.log(e.target.parentNode);
  //   console.log(todosArray[0]);
  //   // let index = todosArray.findIndex(todo => todo.e === e);
  //   // if (todosArray[index].completed === false) {
  //   //   this.setState({completed: true});
  //   // } else {
  //   //   this.setState({completed: false});
  //   // }
    
  // }

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
  
  render() {
    return (
      <div className="app">
        <h1>todos</h1>
        <div className="list">
          <TodoAdd 
            value={this.state.task}
            addTodo={this.addTodo}
            handleChanges={this.handleChanges}
            deleteTodo={this.deleteTodo}
            toggleTodo={this.toggleTodo}
          />
          <TodoList 
            todos={this.state.todos}
            deleteTodo={this.deleteTodo}
            toggleTodo={this.toggleTodo}
          />
          <TodoFooter 
            todos={this.state.todos}
          />
          {/* <TodoForm 
            value={this.state.task}
            addTodo={this.addTodo}
            handleChanges={this.handleChanges}
          /> */}
        </div>
        
      </div>
    );
  }
}

export default App;
