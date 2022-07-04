import { Typography } from "@mui/material";
import CrossTimeGraphic from "../timeGraphic/CrossTimeGraphic";

const GraphicModalTab = (props) => {
  return (
    <>
      <Typography variant="h5" component="div">
        Graphic
      </Typography>
      <CrossTimeGraphic
        data1={props.timesPlayer1}
        data2={props.timesPlayer2}
        color1="green"
        color2="red"
      />
    </>
  );
};

export default GraphicModalTab;
