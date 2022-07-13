import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import TimelineIcon from "@mui/icons-material/Timeline";
import DisplayCubeTime from "../Number/DisplayCubeTime";
import DisplayTime from "../Number/DisplayTime";
import ProgressModal from "../ProgressModal/ProgressModal";

const PracticeBarCard = (props) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  return (
    <Card
      sx={{
        width: 9 / 10,
        overflowX: "auto",
        overflowY: "hidden",
        display: "flex",
      }}
    >
      <CardContent
        sx={{
          width: 1,
        }}
      >
        <div style={useStyles.header}>
          <Typography
            color="textSecondary"
            display="inline"
            align="left"
            style={{ minWidth: "200px" }}
            width={"35%"}
          >
            Scramble: <b>{props.scramble}</b>
          </Typography>

          <Typography
            display="inline"
            align="center"
            style={{ minWidth: "60px" }}
            sx={{ fontSize: 13 }}
            width={"6%"}
          >
            PB:{" "}
            <b>
              <DisplayCubeTime time={props.pb}></DisplayCubeTime>
            </b>
          </Typography>
          <Typography
            display="inline"
            align="center"
            style={{ minWidth: "60px" }}
            sx={{ fontSize: 13 }}
            width={"7%"}
          >
            Media:{" "}
            <b>
              <DisplayTime time={props.media}></DisplayTime>
            </b>
          </Typography>
          <Typography
            display="inline"
            align="center"
            style={{ minWidth: "60px" }}
            sx={{ fontSize: 13 }}
            width={"7%"}
          >
            Avg5:{" "}
            <b>
              <DisplayTime time={props.avg5}></DisplayTime>
            </b>
          </Typography>
          <Typography
            display="inline"
            align="center"
            style={{ minWidth: "60px" }}
            sx={{ fontSize: 13 }}
            width={"7%"}
          >
            Avg12:{" "}
            <b>
              <DisplayTime time={props.avg12}></DisplayTime>
            </b>
          </Typography>
          <Typography
            display="inline"
            align="center"
            style={{ minWidth: "60px" }}
            sx={{ fontSize: 13 }}
            width={"7%"}
          >
            Avg50:{" "}
            <b>
              <DisplayTime time={props.avg50}></DisplayTime>
            </b>
          </Typography>
          <Typography
            display="inline"
            align="center"
            style={{ minWidth: "60px" }}
            sx={{ fontSize: 13 }}
            width={"8%"}
          >
            Avg100:{" "}
            <b>
              <DisplayTime time={props.avg100}></DisplayTime>
            </b>
          </Typography>
          <Button
            variant="text"
            align="right"
            width={"7%"}
            style={{ minWidth: "40px" }}
            onClick={props.deleteAll}
          >
            <DeleteIcon />
          </Button>
          <Button
            width={"7%"}
            align="center"
            variant="text"
            style={{ minWidth: "40px" }}
            onClick={handleOpen}
          >
            <TimelineIcon />
          </Button>
          <ProgressModal
            open={isModalOpen}
            onClose={handleClose}
            listOfTimes={props.listOfTimes}
            playerName={props.playerName1}
            playerName2={props.playerName2}
            height={260}
            width={550}
            updateInTimesPlayer1={props.updateInTimesPlayer1}
          />
        </div>
      </CardContent>
    </Card>
  );
};

const useStyles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

export default PracticeBarCard;
