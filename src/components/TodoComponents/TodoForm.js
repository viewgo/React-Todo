import React from "react";

const TodoForm = props => (
  <div className="todo-form">
    <form onSubmit={props.submitHandler}>
      <div className="form-inputs">
        <input
          name="name"
          id="name"
          type="text"
          placeholder="What do I need to do?"
          value={props.newTask}
          onChange={props.changeHandler}
        />
      </div>

      <div className="todo-buttons">
        <button type="submit">Add Todo</button>
        <button type="button" onClick={props.clearHandler}>
          Clear Completed
        </button>
      </div>
    </form>
  </div>
);

export default TodoForm;
