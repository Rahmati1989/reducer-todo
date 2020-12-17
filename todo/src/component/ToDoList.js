import React from "react";

export const ToDoList = ({ state, dispatch }) => {
  return (
    <div>
      {state.map((item) => {
        return (
          <div className= 'todo-list'
            onClick={() =>
              dispatch({ type: "TOGGLE_COMPLETE", payload: item.id })
            }
          >
            <li className={`task ${item.completed ? "completed" : ""}`}>
              {item.item}
            </li>
          </div>
        );
      })}
      <button onClick={() => dispatch({ type: "CLEAR" })}>
        Clear Completed Tasks
      </button>
    </div>
  );
};

export default ToDoList;