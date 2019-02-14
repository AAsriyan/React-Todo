import React from 'react';
import Todo from './Todo';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = props => {
  return (
      <div className="todo-list">
        {props.todos.map((todo, index) => {
          return (<Todo 
            toggleTodo={props.toggleTodo} 
            deleteTodo={props.deleteTodo}
            key={index} 
            todos={todo}
          />);
        })}
      </div>
  );
}

export default TodoList;