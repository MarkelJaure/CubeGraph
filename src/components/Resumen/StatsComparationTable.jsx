import React, { useState, useEffect } from "react";
import DisplayTime from "../DisplayTime/DisplayTime";
import {
  Table,
  TableContainer,
  TableCell,
  TableRow,
  TableBody,
  Button,
  IconButton,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { getMedia, getPB } from "../lib/ArrayTimesUtil";
import DisplayCubeTime from "../DisplayTime/DisplayCubeTime";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useTranslation } from "react-i18next";

const StatsComparationTable = (props) => {
  const { t } = useTranslation();

  const [showMedia, setShowMedia] = useState(true);
  const handelShowOffMedia = () => setShowMedia(false);
  const handelShowOnMedia = () => setShowMedia(true);
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{
          tableLayout: "fixed",
          minWidth: 200,
          whiteSpace: "nowrap",
          height: "max-content",
        }}
        size="small"
      >
        <TableBody>
          <TableRow>
            <TableCell align="left" width={"30%"}>
              {props.pbPlayer1 ? (
                <DisplayCubeTime time={props.pbPlayer1} />
              ) : (
                ""
              )}
            </TableCell>
            <TableCell align="center" width={"40%"}>
              PB
            </TableCell>
            <TableCell align="right" width={"30%"}>
              {props.pbPlayer2 ? (
                <DisplayCubeTime time={props.pbPlayer2} />
              ) : (
                ""
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row" align="left" width={"25%"}>
              {props.mediaPlayer1 ? (
                showMedia ? (
                  <DisplayTime time={props.mediaPlayer1} />
                ) : (
                  "*****"
                )
              ) : (
                ""
              )}
            </TableCell>
            <TableCell component="th" scope="row" align="center" width={"50%"}>
              {t("Average")}{" "}
              {showMedia && (
                <IconButton
                  color="default"
                  aria-label="upload picture"
                  component="label"
                  onClick={() => handelShowOffMedia()}
                  style={{
                    height: "30px",
                    width: "30px",
                  }}
                >
                  <VisibilityOffIcon />
                </IconButton>
              )}
              {!showMedia && (
                <IconButton
                  color="default"
                  aria-label="upload picture"
                  component="label"
                  onClick={() => handelShowOnMedia()}
                  style={{
                    height: "30px",
                    width: "30px",
                  }}
                >
                  <VisibilityIcon />
                </IconButton>
              )}
            </TableCell>
            <TableCell component="th" scope="row" align="right" width={"25%"}>
              {props.mediaPlayer2 ? (
                showMedia ? (
                  <DisplayTime time={props.mediaPlayer2} />
                ) : (
                  "*****"
                )
              ) : (
                ""
              )}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StatsComparationTable;
