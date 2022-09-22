import React from "react";
import Typography from "@mui/material/Typography";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import SwipeableViews from "react-swipeable-views";
import WinnerModalTab from "./WinnerModalTab";
import StatsModalTab from "./StatsModalTab";
import GraphicModalTab from "./GraphicModalTab";
import { getListWithoutDNFs, getCurrAvg } from "../../lib/ArrayTimesUtil";
import { useTranslation } from "react-i18next";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const CompetitionModal = (props) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.open}
        onClose={props.onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <Box
            sx={{
              bgcolor: "background.paper",
              width: props.width + 50,
              height: props.height + 100,
            }}
            style={style.modal}
          >
            <AppBar position="static">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="inherit"
                variant="fullWidth"
                aria-label="full width tabs example"
              >
                <Tab label={t("Result")} {...a11yProps(0)} />
                <Tab label={t("Stats")} {...a11yProps(1)} />
                <Tab label={t("Graph")} {...a11yProps(2)} />
              </Tabs>
            </AppBar>
            <SwipeableViews
              style={{ overflowY: "hidden" }}
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              <TabPanel value={value} index={0} dir={theme.direction}>
                <WinnerModalTab
                  mediaPlayer1={getCurrAvg(
                    props.timesPlayer1.length,
                    props.timesPlayer1
                  )}
                  mediaPlayer2={getCurrAvg(
                    props.timesPlayer2.length,
                    props.timesPlayer2
                  )}
                  playerName1={props.playerName1}
                  playerName2={props.playerName2}
                  width={props.width}
                  height={props.height}
                />
              </TabPanel>
              <TabPanel value={value} index={1} dir={theme.direction}>
                <StatsModalTab
                  timesPlayer1={props.timesPlayer1}
                  timesPlayer2={props.timesPlayer2}
                  playerName1={props.playerName1}
                  playerName2={props.playerName2}
                  width={props.width}
                  height={props.height}
                  updateInTimesPlayer1={props.updateInTimesPlayer1}
                  updateInTimesPlayer2={props.updateInTimesPlayer2}
                />
              </TabPanel>
              <TabPanel value={value} index={2} dir={theme.direction}>
                <GraphicModalTab
                  timesPlayer1={getListWithoutDNFs(props.timesPlayer1)}
                  timesPlayer2={getListWithoutDNFs(props.timesPlayer2)}
                  width={props.width}
                  height={props.height}
                  playerName1={props.playerName1}
                  playerName2={props.playerName2}
                />
              </TabPanel>
            </SwipeableViews>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

const style = {
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  },
};

export default CompetitionModal;
