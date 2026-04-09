import { Outlet } from "react-router";

function Layout() {
  return (
    <>
      <h1>Layout</h1>
      <Outlet />
    </>
  );
}

export default Layout;