import React, { useState, useEffect } from "react";
import TimeCard from "./TimeCard";
import ListCard from "./ListCard";

export default function CubeTimerController(props) {
  const [listOfTimes, setListOfTimes] = useState([]);

  const handleNewTime = (time) => {
    var newTime = { time: time, timestamp: Date.now() };
    setListOfTimes((listOfTimes) => [...listOfTimes, newTime]);
    if (props.addTime) {
      props.addTime(newTime);
    }
  };

  const handleDeleteTime = (time) => {
    if (listOfTimes.includes(time)) {
      var tmpList = listOfTimes.filter((aTime) => aTime !== time);
      setListOfTimes(tmpList);

      if (props.deleteTime) {
        props.deleteTime(time);
      }
    }
  };

  return (
    <>
      <div
        style={{
          flex: 1,
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ flex: 1, justifyContent: "center", display: "flex" }}>
          <TimeCard
            playerName={props.playerName}
            keyValue={props.keyValue}
            keyName={props.keyName}
            notifyNewTime={handleNewTime}
          />
        </div>
        <div
          style={{
            flex: 1,
            justifyContent: "center",
            display: "flex",
            marginTop: "2vh",
          }}
        >
          <ListCard listOfTimes={listOfTimes} deleteTime={handleDeleteTime} />
        </div>
      </div>
    </>
  );
}
