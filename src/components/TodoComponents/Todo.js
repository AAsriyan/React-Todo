import React from 'react';

const Todo = props => {
  return (
    <div 
      className={`todo${props.todos.completed ? ' completed' : ''}`}
      onClick={() => props.toggleTodo(props.todos.id)} 
    >
      <input 
        className="toggleCompleted"
        onClick={() => props.toggleTodo(props.todos.id)} 
        type="checkbox"
      />
      <h2>{props.todos.task}</h2>
      <span className="delete" onClick={props.deleteTodo}>x</span>
    </div>
  );
  
}

export default Todo;