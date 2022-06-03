import { useReducer, useState } from "react";
import Reducer from "../Reducer/Reducer";

const Todo = () => {
  const [{ todos, todoCount }, dispatch] = useReducer(Reducer, {
    todos: [],
    todoCount: 0,
  });
  const [text, setText] = useState();

  return (
    <>
      <div className="Main">
        <div className="Inside_Main">
          <h1>Todo List</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch({ type: "ADD-TODO", text });
              setText("");
            }}
          >
            <input value={text} onChange={(e) => setText(e.target.value)} />
          </form>
          <div>number of todos: {todoCount}</div>
          {todos.map((t, idx) => (
            <div
              className="input_box"
              key={t.idx}
              style={{
                textDecoration: t.completed ? "line-through" : "",
              }}
            >
              <div className="left">
                <button
                  className="button"
                  onClick={() => dispatch({ type: "TOGGLE-TODO", idx })}
                >
                  o
                </button>
              </div>
              <div>
                {" "}
                {t.text}
                {idx}
              </div>
              <div className="right">
                {" "}
                <button
                  className="button2"
                  onClick={() => dispatch({ type: "DELETE-TODO", idx })}
                >
                  X{" "}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Todo;
