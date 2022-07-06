import { Typography } from "@mui/material";
import { getMedia } from "../Number/ArrayLib";
import CrossTimeGraphic from "../timeGraphic/CrossTimeGraphic";

const GraphicModalTab = (props) => {
  const getColor = (times1, times2) => {
    if (getMedia(times1) <= getMedia(times2)) {
      if (getMedia(times1) === getMedia(times2)) {
        return "gray";
      }
      return "green";
    }
    return "red";
  };
  return (
    <>
      <CrossTimeGraphic
        data1={props.timesPlayer1}
        data2={props.timesPlayer2}
        color1={getColor(props.timesPlayer1, props.timesPlayer2)}
        color2={getColor(props.timesPlayer2, props.timesPlayer1)}
        width={props.width}
        height={props.height}
        playerName1={props.playerName1}
        playerName2={props.playerName2}
      />
    </>
  );
};

export default GraphicModalTab;
