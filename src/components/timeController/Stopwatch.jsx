import React from "react";
import { useState, useEffect } from "react";
import DisplayTime from "../Number/DisplayTime";

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
    console.log("hm");
    if (props.isRunning) {
      console.log("Iniciando timer");
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
        <DisplayTime time={time} />
      </div>
    </div>
  );
};

export default Stopwatch;
