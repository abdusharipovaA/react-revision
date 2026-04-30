import { useState } from "react";

function Stopwatch() {
  const [timer, setTimer] = useState(false);
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const runTimer = () => {
    if (!timer) {
      let intervalId = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1);

      setIntervalId(intervalId);
    } else {
      clearInterval(intervalId);
    }

    setTimer(!timer);
  };

  const reset = () => {
    console.log("clicked...");
    setTimer(false);
    setTime(0);
    clearInterval(intervalId);
  };

  return (
    <>
      <div className="container">
        <h1> Stopwatch</h1>

        <h1 className="timer">
          {Math.floor(time / 3600) < 10
            ? "0" + Math.floor(time / 3600)
            : Math.floor(time / 3600)}
          :
          {Math.floor(time / 60) % 60 < 10
            ? "0" + (Math.floor(time / 60) % 60)
            : Math.floor(time / 60) % 60}
          :{time % 60 < 10 ? "0" + (time % 60) : time % 60}
        </h1>
        {/* <h1 className="timer">{time}</h1> */}
        <button
          onClick={runTimer}
          className={`btn ${timer ? "btn-stop" : "btn-start"}`}
        >
          {timer ? "Stop" : "Start"}
        </button>
        <button onClick={reset} className="btn btn-reset">
          Reset
        </button>
      </div>
    </>
  );
}

export default Stopwatch;
