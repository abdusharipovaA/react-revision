import { Link, Outlet } from "react-router";

function ProjectLayout() {
  return (
    <>
      <div className="text-left">
        <Link to={"/projects"}>
          <i className="fa-solid fa-left-long"></i>
        </Link>
      </div>

      <Outlet />
    </>
  );
}

export default ProjectLayout;
