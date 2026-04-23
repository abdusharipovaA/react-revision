import "./App.css";
import { Routes, Route, Link } from "react-router";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Stopwatch from "./pages/Stopwatch";
import Layout from "./layouts/Layout";
import TodoApp from "./pages/TodoApp";
import ProjectLayout from "./layouts/ProjectLayout";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/projects" element={<ProjectLayout />}>
            <Route path="/projects/stopwatch" element={<Stopwatch />}></Route>
            <Route path="/projects/todo" element={<TodoApp />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
