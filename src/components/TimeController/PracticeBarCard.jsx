import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import TimelineIcon from "@mui/icons-material/Timeline";
import DisplayCubeTime from "../DisplayTime/DisplayCubeTime";
import DisplayTime from "../DisplayTime/DisplayTime";
import ProgressModal from "../ProgressModal/ProgressModal";
import { getListWithoutDNFs } from "../lib/ArrayTimesUtil";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import { useTranslation } from "react-i18next";
import AnimateOnChange from "react-animate-on-change";
import "./styles.css";

const PracticeBarCard = (props) => {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  const [isOpenDialog, setIsOpenDialog] = React.useState(false);
  const handleDialogOpen = () => setIsOpenDialog(true);
  const handleDialogClose = () => setIsOpenDialog(false);

  const checkDisabledGraphicButton = () => {
    if (!props.listOfTimes) {
      return true;
    }
    if (getListWithoutDNFs(props.listOfTimes).length === 0) {
      return true;
    }
    return false;
  };

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
            align="left"
            style={{ minWidth: "200px" }}
            width={"35%"}
          >
            Scramble: <b>{props.scramble}</b>
          </Typography>

          <Typography align="center" style={useStyles.avgTime} width={"6%"}>
            PB:{" "}
            <b>
              <AnimateOnChange
                baseClassName="pb"
                animationClassName="bestPb-change"
                animate={props.animatePb}
              >
                <DisplayCubeTime time={props.pb}></DisplayCubeTime>
              </AnimateOnChange>
            </b>
          </Typography>
          <Typography align="center" style={useStyles.avgTime} width={"7%"}>
            Media:{" "}
            <b>
              <DisplayTime time={props.media}></DisplayTime>
            </b>
          </Typography>
          <Typography align="center" style={useStyles.avgTime} width={"7%"}>
            Avg5:{" "}
            <b>
              <DisplayTime time={props.avg5}></DisplayTime>
            </b>
          </Typography>
          <Typography align="center" style={useStyles.avgTime} width={"7%"}>
            Avg12:{" "}
            <b>
              <DisplayTime time={props.avg12}></DisplayTime>
            </b>
          </Typography>
          <Typography align="center" style={useStyles.avgTime} width={"7%"}>
            Avg50:{" "}
            <b>
              <DisplayTime time={props.avg50}></DisplayTime>
            </b>
          </Typography>
          <Typography align="center" style={useStyles.avgTime} width={"8%"}>
            Avg100:{" "}
            <b>
              <DisplayTime time={props.avg100}></DisplayTime>
            </b>
          </Typography>
          <Tooltip title={t("DeleteAllTooltip")} placement="bottom">
            <Button
              variant="text"
              align="right"
              width={"7%"}
              style={{ minWidth: "40px" }}
              onClick={handleDialogOpen}
            >
              <DeleteIcon />
            </Button>
          </Tooltip>
          <ConfirmationModal
            open={isOpenDialog}
            handleClose={handleDialogClose}
            title={t("Delete all")}
            text={t("Sure to delete all?")}
            cancel={handleDialogClose}
            accept={() => {
              props.deleteAll();
              handleDialogClose();
            }}
          />
          <Tooltip title={t("PracticeGraphTooltip")} placement="bottom">
            <Button
              width={"7%"}
              align="center"
              variant="text"
              style={{ minWidth: "40px" }}
              onClick={handleOpen}
              disabled={checkDisabledGraphicButton()}
            >
              <TimelineIcon />
            </Button>
          </Tooltip>
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
  avgTime: {
    minWidth: "60px",
    fontSize: 13,
  },
};

export default PracticeBarCard;
