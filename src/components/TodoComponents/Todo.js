import React from "react";

const Todo = props => (
  <div className="todo-item">
    <div className="todo-checkbox">
      <input
        type="checkbox"
        checked={props.todoItem.completed}
        onChange={e => props.checkedHandler(e, props.todoItem, props.index)}
      />
    </div>
    <div className="todo-info">
      <h3>{props.todoItem.task}</h3>
    </div>
  </div>
);

export default Todo;
