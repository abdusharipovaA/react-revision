import { Link } from "react-router";

function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <div className="projects-wrap">
        <ul>
          <li>
            <Link to={"/projects/stopwatch"}>1. Stopwatch</Link>
          </li>
          <li>
            <Link to={"/projects/todo"}>2. Todo App</Link>
          </li>
          <li>
            <Link to={"/projects/counter"}>3. Counter App</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Projects;