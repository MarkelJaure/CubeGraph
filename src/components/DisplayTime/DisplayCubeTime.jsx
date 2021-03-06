import { TWO_SECONDS } from "../lib/Constants";
import DisplayTime from "./DisplayTime";

const DisplayCubeTime = (props) => {
  return (
    <>
      {props.time && (
        <>
          {!props.time.dnf && !props.time.plus2 && (
            <DisplayTime time={props.time.time} />
          )}
          {!props.time.dnf && props.time.plus2 && (
            <>
              <DisplayTime time={props.time.time + TWO_SECONDS} />
              <span>+</span>
            </>
          )}
          {props.time.dnf && <span>DNF</span>}
        </>
      )}
    </>
  );
};

export default DisplayCubeTime;
