import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  const query = props.search;

  return (
    <>
      {console.log("listing data: ", props.propsData)}
      <div className="todo-list">
        {props.propsData.map((element, index) => {
          if (element.task.toLowerCase().includes(query.toLowerCase())) {
            return <Todo key={index} index={index} todoItem={element} checkedHandler={props.checkedHandler} />;
          }
        })}
      </div>
    </>
  );
};

export default TodoList;
