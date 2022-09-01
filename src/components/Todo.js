import React from "react";

const Todo = (props) => {
const {
  item,
  deleteTodo,
  setIsEdit,
  setWillUpdateTodo,
  setTodoText,
  changeIsDone,
} = props; 
return (
<div
      className={`alert alert-${
        item.isDone === true ? "info" : "secondary"
      } d-flex justify-content-between align-items-center`}
    >
    <p>{item.text}</p>
    <div>
     <button className="btn btn-sm btn-danger "
     onClick={() => deleteTodo(item.id)}>SIL

     </button>
     <button className="btn btn-sm btn-success mx-1"
     onClick={() => {
      setIsEdit(true);
      setWillUpdateTodo(item.id);
      setTodoText(item.text);
     }}
     >
     DUZELT
     </button>
     <button onClick={() => changeIsDone(item.id)}
     className="btn btn-sm px-1 btn-warning"
     >
     {item.isDone === false ? "YAPILACAK" : "YAPILDI"}
     </button>
    </div>

  </div>
);
};

export default Todo;