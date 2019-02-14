import React from 'react';

const Todo = props => {
  return (
    <div className="all-todo">
      <div 
        className={`todo${props.todos.completed ? ' completed' : ''} ${props.todo}`}
        onClick={() => props.toggleTodo(props.todos.id)}
      >
        {/* <input 
          className="toggleCompleted"
          onClick={() => props.toggleTodo(props.todos.id)} 
          type="checkbox"
        /> */}
        <h2>{props.todos.task}</h2>
      </div>
      <span className="delete" onClick={props.deleteTodo}>x</span>
    </div>
    
  );
  
}

export default Todo;