import React, { useState, useEffect } from "react";
import {
  Table,
  TableContainer,
  TableBody,
  TableFooter,
  TableRow,
  TablePagination,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import SingleTimeComparation from "./SingleTimeComparation";
import { TablePaginationActions } from "../lib/TablePaginationActionsUtil";

const TimesComparationTable = (props) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const checkHidden = () => {
    return (
      props.timesPlayer1.length <= rowsPerPage &&
      props.timesPlayer1.length <= rowsPerPage
    );
  };

  return (
    <TableContainer
      component={Paper}
      style={{ maxHeight: "calc(100vh - 300px)" }}
    >
      <Table
        sx={{
          tableLayout: "fixed",
          height: "max-content",
          minWidth: 180,
          overflowX: "auto",
          whiteSpace: "nowrap",
        }}
        size="small"
      >
        <TableBody>
          {props.timesPlayer1 >= props.timesPlayer2 &&
            reverse(props.timesPlayer1)
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((time, index) => {
                return (
                  <SingleTimeComparation
                    time1={time}
                    time2={props.timesPlayer2[props.timesPlayer1.indexOf(time)]}
                    playerName1={props.playerName1}
                    playerName2={props.playerName2}
                  />
                );
              })}

          {props.timesPlayer2 > props.timesPlayer1 &&
            reverse(props.timesPlayer2)
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((time, index) => {
                return (
                  <SingleTimeComparation
                    time1={props.timesPlayer1[props.timesPlayer2.indexOf(time)]}
                    time2={time}
                    playerName1={props.playerName1}
                    playerName2={props.playerName2}
                  />
                );
              })}
        </TableBody>
        <TableFooter style={{ display: checkHidden() ? "none" : "" }}>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[10]}
              colSpan={3}
              count={
                props.timesPlayer1.length >= props.timesPlayer2.length
                  ? props.timesPlayer1.length
                  : props.timesPlayer2.length
              }
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

function reverse(array) {
  return array.map((item, idx) => array[array.length - 1 - idx]);
}

export default TimesComparationTable;
