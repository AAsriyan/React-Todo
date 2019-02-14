import React from 'react';

const TodoAdd = props => {
  return (
    <form onSubmit={props.addTodo}>
      <input 
        className="new-todo"
        type="text"
        value={props.value}
        onChange={props.handleChanges}
        name="task"
        placeholder="What needs to be done?"
      />
      <button type="submit" onClick={props.addTodo}>Add Todo</button>
    </form>
  );
}

export default TodoAdd;