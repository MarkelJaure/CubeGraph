import React, { useState, useEffect } from "react";
import TimeCard from "./TimeCard";
import ListCard from "./ListCard";

export default function CubeTimerController(props) {
  const [listOfTimes, setListOfTimes] = useState([]);

  const handleNewTime = (time) => {
    var newTime = {
      time: time,
      timestamp: Date.now(),
      plus2: false,
      dnf: false,
    };
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

  const handlePlus2 = (time) => {
    if (listOfTimes.includes(time)) {
      var tmpList = listOfTimes.map((aTime) => {
        if (aTime === time) {
          aTime.plus2 = !aTime.plus2;
        }
        return aTime;
      });

      setListOfTimes(tmpList);

      if (props.plus2) {
        props.plus2(time);
      }
    }
  };

  const handleDNF = (time) => {
    if (listOfTimes.includes(time)) {
      var tmpList = listOfTimes.map((aTime) => {
        if (aTime === time) {
          aTime.dnf = !aTime.dnf;
        }
        return aTime;
      });

      setListOfTimes(tmpList);

      if (props.dnf) {
        props.dnf(time);
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
          <ListCard
            listOfTimes={listOfTimes}
            deleteTime={handleDeleteTime}
            plus2={handlePlus2}
            dnf={handleDNF}
          />
        </div>
      </div>
    </>
  );
}
