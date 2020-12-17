import React, { useState} from "react";

export const ToDoForm = ({dispatch}) => {

  const [newToDo, setNewTodo] = useState("");

  const handleChanges = (e) => {
    setNewTodo(e.target.value);
  };

  return (
    <div>
      <input
        className="todoInput"
        placeholder='Add a Task'
        type="text"
        name="newTodoInput"
        onChange={handleChanges}
        value={newToDo}
      />
      <button onClick={() => dispatch({type: "ADD_TODO", payload:newToDo })}>
        Add Task
      </button>
    </div>
  );
};

export default ToDoForm;