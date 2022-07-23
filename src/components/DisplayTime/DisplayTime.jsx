import { DNF_TIME, NULL_TIME } from "../lib/Constants";

const DisplayTime = (props) => {
  return (
    <>
      {props.time === DNF_TIME && <span>DNF</span>}
      {props.time === NULL_TIME && <span>---</span>}
      {props.time >= 0 && (
        <>
          {Math.floor((props.time / 60000) % 60) > 0 && (
            <span>
              {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
            </span>
          )}
          <span>{("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((props.time / 10) % 100)).slice(-2)}</span>
        </>
      )}
    </>
  );
};

export default DisplayTime;
