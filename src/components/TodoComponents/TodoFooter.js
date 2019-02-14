import React from 'react';

const TodoFooter = props => {
  return (
    <div className="footer">
      <h3>{props.count} items left</h3>
      <div className="tab-filter">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <button>Clear Completed</button>
    </div>
  );
}

export default TodoFooter;