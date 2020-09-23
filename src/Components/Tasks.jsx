import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Context from "../store/context";
import "./Tasks.css";

function Tasks() {
  const [globalState, globalDispatch] = useContext(Context);
  const [toDoList, setList] = useState([]);
  const [isAddClick, setAddClick] = useState(false);
  const [newId, setNewId] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newCompleted, setNewCompleted] = useState("");

  useEffect(() => {
    setList(JSON.parse(localStorage.getItem("localToDoList")));
  }, []);

  const addNewRow = () => {
    const rows = [
      ...toDoList,
      {
        userId: "5",
        id: newId,
        title: newTitle,
        completed: newCompleted,
      },
    ];

    setList(rows);

    localStorage.setItem("localToDoList", JSON.stringify(rows));
  
  };

  const deleteToDo = (i) => {
    toDoList.splice(i, 1);
    localStorage.setItem("localToDoList", JSON.stringify(toDoList));
    setList(JSON.parse(localStorage.getItem("localToDoList")));
  };

  return globalState.isLoggedIn ? (
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
                    type="submit"
                    onClick={() => {
                      deleteToDo(key);
                    }}
                    className="todo__delete"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}

          <tr style={{ display: !isAddClick && "none" }} className="todo__row">
            <td>
              <input
                className="todo__item"
                onChange={(e) => setNewId(e.target.value)}
                type="text"
              />
            </td>
            <td>
              <input
                className="todo__item"
                onChange={(e) => setNewTitle(e.target.value)}
                type="text"
              />
            </td>
            <td>
              <input
                className="todo__item"
                onChange={(e) => setNewCompleted(e.target.value)}
                type="text"
              />
            </td>
            <td>
              <button className="todo__add" onClick={addNewRow}>
                ADD
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => setAddClick(true)} className="tasks__add">
        ADD ITEM
      </button>
    </div>
  ) : (
    <h1>Please Login</h1>
  );
}

export default Tasks;
