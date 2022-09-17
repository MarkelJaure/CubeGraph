import { DNF_TIME, NULL_TIME } from "../lib/Constants";

const DisplayTime = (props) => {
  return (
    <>
      {props.time === DNF_TIME && <span>DNF</span>}
      {props.time === NULL_TIME && <span>---</span>}
      {props.time >= 0 && (
        <>
          {Math.floor((props.time / 60000) % 60) > 0 && (
            <span>{getMinutes(props.time)}:</span>
          )}
          <span>{getSeconds(props.time)}:</span>
          <span>{getMiliseconds(props.time)}</span>
        </>
      )}
    </>
  );
};

const getMinutes = (aTime) => {
  return ("0" + Math.floor((aTime / 60000) % 60)).slice(-2);
};

const getSeconds = (aTime) => {
  return ("0" + Math.floor((aTime / 1000) % 60)).slice(-2);
};

const getMiliseconds = (aTime) => {
  return ("0" + ((aTime / 10) % 1000)).slice(-2);
};
export default DisplayTime;
