import { getCurrAvg } from "../lib/ArrayTimesUtil";
import CrossTimeGraphic from "../TimeGraphic/CrossTimeGraphic";

const GraphicModalTab = (props) => {
  const getColor = (times1, times2) => {
    if (
      getCurrAvg(times1.length, times1) <= getCurrAvg(times2.length, times2)
    ) {
      if (
        getCurrAvg(times1.length, times1) === getCurrAvg(times2.length, times2)
      ) {
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
