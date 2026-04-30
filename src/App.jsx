import "./App.css";
import { Routes, Route } from "react-router";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Stopwatch from "./pages/Stopwatch";
import Layout from "./layouts/Layout";
import TodoApp from "./pages/TodoApp";
import ProjectLayout from "./layouts/ProjectLayout";
import CounterApp from "./pages/Counter";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="projects" element={<ProjectLayout />}>
            <Route index element={<Projects />} />
            <Route path="stopwatch" element={<Stopwatch />} />
            <Route path="todo" element={<TodoApp />} />
            <Route path="counter" element={<CounterApp />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;