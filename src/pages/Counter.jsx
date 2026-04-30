import { useEffect, useState } from "react";

function CounterApp() {
  const [counters, setCounters] = useState([
    { id: 1, count: 0 },
    { id: 2, count: 0 },
    { id: 3, count: 0 },
    { id: 4, count: 0 },
  ]);

  const [items, setItems] = useState(0);

  const plus = (id) => {
    const newCounters = counters.map((c) =>
      c.id === id ? { ...c, count: c.count + 1 } : c
    );
    setCounters(newCounters);
  };

  const minus = (id) => {
    const newCounters = counters.map((c) =>
      c.id === id
        ? { ...c, count: c.count > 0 ? c.count - 1 : 0 }
        : c
    );
    setCounters(newCounters);
  };

  const deleteCounter = (id) => {
    setCounters(counters.filter((c) => c.id !== id));
  };

  const resetAll = () => {
    setCounters(counters.map((c) => ({ ...c, count: 0 })));
  };

  useEffect(() => {
    let total = 0;
    counters.forEach((c) => {
      total += c.count;
    });
    setItems(total);
  }, [counters]);

  return (
    <div className="container wrap-counter">
      <h1>
        🛒 <span>{items}</span> Items
      </h1>

      <button onClick={resetAll}>RESET</button>

      {counters.map((c) => (
        <div key={c.id}>
          <span>{c.count === 0 ? "Zero" : c.count}</span>

          <button onClick={() => plus(c.id)}>+</button>
          <button onClick={() => minus(c.id)}>-</button>

          <button onClick={() => deleteCounter(c.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default CounterApp;