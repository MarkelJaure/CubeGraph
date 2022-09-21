import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import TimelineIcon from "@mui/icons-material/Timeline";
import DisplayCubeTime from "../../DisplayTime/DisplayCubeTime";
import DisplayTime from "../../DisplayTime/DisplayTime";
import ProgressModal from "../../modals/ProgressModal/ProgressModal";
import { getListWithoutDNFs } from "../../lib/ArrayTimesUtil";
import ConfirmationModal from "../../modals/ConfirmationModal/ConfirmationModal";
import { useTranslation } from "react-i18next";
import AnimateOnChange from "react-animate-on-change";
import "../styles.css";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const PracticeBarCard = (props) => {
  const { t } = useTranslation();

  const [categorySelected, setCategorySelected] = useState("3x3");
  function handleChangeLenguaje(event) {
    setCategorySelected(event.target.value);
  }

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
        height: "max-content",
      }}
    >
      <CardContent
        sx={{
          width: 1,
        }}
      >
        <div style={useStyles.header}>
          <FormControl width={"30%"}>
            <InputLabel>{t("Category")}</InputLabel>
            <Select
              value={categorySelected}
              label={t("Category")}
              onChange={handleChangeLenguaje}
            >
              <MenuItem value={"2x2"}>{t("Cube2x2")}</MenuItem>
              <MenuItem value={"3x3"}>{t("Cube3x3")}</MenuItem>
            </Select>
          </FormControl>

          <Typography
            color="textSecondary"
            align="center"
            style={{ minWidth: "200px" }}
            width={"50%"}
          >
            Scramble: <b>{props.scramble}</b>
          </Typography>

          {/* <Typography align="center" style={useStyles.avgTime} width={"6%"}>
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
          </Typography> */}
          <Tooltip title={t("DeleteAllTooltip")} placement="bottom">
            <Button
              variant="text"
              align="right"
              width={"20%"}
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
          {/* <Tooltip title={t("PracticeGraphTooltip")} placement="bottom">
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
            playerName={props.playerName}
            height={260}
            width={550}
            updateInTimesPlayer={props.updateInTimesPlayer}
          /> */}
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
