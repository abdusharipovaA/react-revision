import { Link } from "react-router";

function Header() {
  return (
    <>
      <nav>
        <div className="logo">Abbos Projects</div>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/projects"}>Projects</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;