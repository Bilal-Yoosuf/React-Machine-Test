import Axios from "axios";
import React, { useState } from "react";
import "./Tasks.css";

function Tasks() {
  const [toDoList, setList] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/todos";
  var newToDoList =[];
  
  Axios.get(url).then((response) => {
    localStorage.setItem("localToDoList", JSON.stringify(response.data));
     newToDoList = JSON.parse(localStorage.getItem("localToDoList"));
    setList(newToDoList);
  });
 

  const deleteToDo = (i) => {
    
     newToDoList.splice(i, 1);
    setList(newToDoList);
    console.log(toDoList)
  };

  return (
    <div className="tasks">
      <table>
        <tbody>
          {toDoList.map((item, key) => {
            return (
              <tr className="todo__row">
                <td className="todo__item">{item.id}</td>
                <td className="todo__item todo__title">{item.title}</td>
                <td className="todo__item">{item.completed.toString()}</td>
                <td>
                  <button
                    type='submit'
                    onClick={() => {deleteToDo(key)}}
                    className="todo__delete"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Tasks;
