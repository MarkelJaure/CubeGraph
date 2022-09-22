import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Stopwatch from "./Stopwatch";
import { useTranslation } from "react-i18next";

const TimeCardText = (props) => {
  const { t } = useTranslation();

  const [isInputActivated, setIsInputActivated] = useState(false);
  const handleEnableInput = () => setIsInputActivated(true);
  const handleDisableInput = () => setIsInputActivated(false);
  const handleChangeInput = () => setIsInputActivated(!isInputActivated);

  const [inputValue, setInputValue] = useState(null);

  const returnTime = (time) => {
    if (props.notifyNewTime) {
      props.notifyNewTime(time);
    }
  };

  return (
    <div>
      <Typography sx={sx.secondaryText} color="text.secondary">
        {props.playerName}
      </Typography>
      <div style={sx.stopwatchLine}>
        <div style={sx.stopwatchDiv}></div>
        <div style={sx.stopwatchDiv}>
          <Typography
            variant="h5"
            sx={{
              fontSize: 50,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Stopwatch
              isRunning={props.timerPlayer}
              parentCallback={returnTime}
            />
          </Typography>

          {/* {isInputActivated && (
            <TextField
              InputProps={{ style: { fontSize: 50 } }}
              id="input-time"
              type="number"
              value={inputValue}
              variant="standard"
              onMouseDown={(event) => event.stopPropagation()}
              onMouseUp={(event) => event.stopPropagation()}
              onChange={(e) => setInputValue(e.target.value)}
              onSubmit={(e) => handleDisableInput()}
            />
          )} */}
        </div>
        <div style={sx.stopwatchDiv}>
          {/* <Tooltip title={t("InputFromKeyboardTooltip")} placement="bottom">
            <Button
              align="center"
              variant="text"
              style={{ minWidth: "40px" }}
              onMouseDown={(event) => event.stopPropagation()}
              onMouseUp={(event) => event.stopPropagation()}
              onClick={(event) => {
                event.preventDefault();
                handleChangeInput();
              }}
            >
              <KeyboardIcon />
            </Button>
          </Tooltip> */}
        </div>
      </div>
      <Typography
        sx={sx.secondaryText}
        //style={{marginTop:2}}
        color="text.secondary"
      >
        {!props.timerPlayer
          ? `${t("Hold")} [${props.keyName}] ${t("to start")}`
          : `${t("Press")} [${props.keyName}] ${t("to stop")}`}
      </Typography>
    </div>
  );
};

const sx = {
  secondaryText: {
    fontSize: "14px",
    display: "flex",
    justifyContent: "center",
  },
  stopwatchLine: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "110%",
  },
  stopwatchDiv: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default TimeCardText;
