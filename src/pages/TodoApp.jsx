import { Link } from "react-router";

function TodoApp() {
  return (
    <>
      <h1>2. TodoApp</h1>
      <div className="input">
        <input type="text" placeholder="Add a task" />
        <button>Add</button>
      </div>
      <div className="Board">
        <div className="BoardBox">
          <h1>ali ruzmetov</h1>
          <button>Delete</button>
        </div>
        <div className="BoardBox">
          <h1>ali ruzmetov</h1>
          <button>Delete</button>
        </div>
        <div className="BoardBox">
          <h1>ali ruzmetov</h1>
          <button>Delete</button>
        </div>
        <div className="BoardBox">
          <h1>ali ruzmetov</h1>
          <button>Delete</button>
        </div>
        <div className="BoardBox">
          <h1>ali ruzmetov</h1>
          <button>Delete</button>
        </div>
        <div className="BoardBox">
          <h1>ali ruzmetov</h1>
          <button>Delete</button>
        </div>
      </div>
    </>
  );
}

export default TodoApp;