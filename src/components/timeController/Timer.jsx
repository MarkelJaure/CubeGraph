import React from "react";
import { useState, useEffect } from "react";

const Stopwatch = (props) => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(props.isRunning);
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  useEffect(() => {
    if (props.isRunning) {
      setTime(0);
    } else {
      if (time !== 0) {
        props.parentCallback(time);
      }
    }
    setRunning(props.isRunning);
  }, [props.isRunning]);

  return (
    <div className="stopwatch">
      <div className="numbers">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
    </div>
  );
};

export default Stopwatch;
