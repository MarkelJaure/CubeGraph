const DisplayTime = (props) => {
  return (
    <>
      {props.time === -1 && <span>DNF</span>}
      {props.time === -2 && <span>---</span>}
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
