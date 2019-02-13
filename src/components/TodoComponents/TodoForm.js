import React from 'react';

const TodoForm = props => {
  return (
    <form onSubmit={props.addTodo}>
      <input 
        type="text"
        value={props.value}
        onChange={props.handleChanges}
        name="todo"
        placeholder="Add Todo"
      />
      <button type="submit" onClick={props.addTodo}>Add Todo</button>
      <button>Clear Completed</button>
    </form>
  );
}

export default TodoForm;