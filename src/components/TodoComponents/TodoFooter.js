import React from 'react';

const TodoFooter = props => {
  return (
    <div className="footer">
      <h3>{props.count} items left</h3>
      <div className="tab-filter">
        <button onClick={props.showAll}>All</button>
        <button onClick={props.showActive}>Active</button>
        <button>Completed</button>
      </div>
      <button onClick={props.clearCompleted} >Clear Completed</button>
    </div>
  );
}

export default TodoFooter;