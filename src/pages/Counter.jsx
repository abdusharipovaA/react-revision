import { useState } from "react";
import "./Counter.jsx";

function CounterApp() {
  const [counters, setCounters] = useState([
    { id: 1, count: 0 },
    { id: 2, count: 0 },
    { id: 3, count: 0 },
    { id: 4, count: 0 },
  ]);

  const updateCounter = (id, type) => {
    setCounters((prev) =>
      prev.map((c) => {
        if (c.id !== id) return c;

        if (type === "inc") return { ...c, count: c.count + 1 };
        if (type === "dec") return { ...c, count: Math.max(0, c.count - 1) };

        return c;
      })
    );
  };

  const deleteCounter = (id) => {
    setCounters((prev) => prev.filter((c) => c.id !== id));
  };

  const resetAll = () => {
    setCounters((prev) => prev.map((c) => ({ ...c, count: 0 })));
  };

  const totalItems = counters.reduce((sum, c) => sum + c.count, 0);

  return (
    <div className="app">
      <div className="card">
        <h1 className="title">🛒 Counter App</h1>

        <div className="header">
          <span className="items">{totalItems}</span>
          <span>Items</span>
        </div>

        <button className="reset" onClick={resetAll}>
          RESET ALL
        </button>

        <div className="list">
          {counters.map((c) => (
            <div className="row" key={c.id}>
              <span className="count">{c.count}</span>

              <div className="buttons">
                <button onClick={() => updateCounter(c.id, "inc")}>+</button>
                <button onClick={() => updateCounter(c.id, "dec")}>-</button>
                <button className="delete" onClick={() => deleteCounter(c.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CounterApp;