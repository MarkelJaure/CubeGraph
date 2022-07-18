import React, { useState, useEffect, MouseEvent } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Table, TableContainer, TableBody } from "@mui/material";
import Paper from "@mui/material/Paper";
import SingleCubeTimeRow from "./SingleCubeTimeRow";
import { getPB } from "../lib/ArrayTimesUtil";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const ListCard = (props) => {
  const { t } = useTranslation();

  const isTheBestTime = (time) => {
    return getPB(props.listOfTimes) === time;
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - props.listOfTimes.length)
      : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const checkHidden = () => {
    return props.listOfTimes.length <= rowsPerPage;
  };

  return (
    <Card
      sx={{ width: 9 / 10 }}
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <CardContent sx={{ width: 1 }}>
        <Typography
          sx={{ fontSize: 14, display: "flex", justifyContent: "center" }}
          color="text.secondary"
          gutterBottom
        >
          {t("Times")}
        </Typography>
        <Typography variant="h5" component="div">
          <TableContainer
            component={Paper}
            style={{ maxHeight: "calc(100vh - 300px)" }}
          >
            <Table
              sx={{
                whiteSpace: "nowrap",
                tableLayout: "fixed",
                overflowX: "auto",
                minWidth: 200,
              }}
              size="small"
            >
              <TableBody>
                {reverse(props.listOfTimes)
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((time, index) => {
                    return (
                      <SingleCubeTimeRow
                        index={props.listOfTimes.indexOf(time)}
                        time={time}
                        isBestTime={isTheBestTime(time)}
                        deleteTime={props.deleteTime}
                        plus2={props.plus2}
                        dnf={props.dnf}
                      />
                    );
                  })}
              </TableBody>
              <TableFooter style={{ display: checkHidden() ? "none" : "" }}>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[10]}
                    colSpan={6}
                    count={props.listOfTimes.length}
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
        </Typography>
      </CardContent>
    </Card>
  );
};

function reverse(array) {
  return array.map((item, idx) => array[array.length - 1 - idx]);
}

const getSinceAgo = (timestamp) => {
  var currentTimesamp = Date.now();
  var sinceAgo = currentTimesamp - timestamp;
  var aMinute = 60 * 1000;
  var aHour = 60 * aMinute;
  var aDay = 24 * aHour;
  if (sinceAgo <= aMinute) {
    return "Hace menos de 1 minuto";
  }
  if (sinceAgo <= aHour) {
    return "Hace " + Math.trunc(sinceAgo / aMinute) + " minutos";
  }
  if (sinceAgo <= aDay) {
    return "Hace " + Math.trunc(sinceAgo / aHour) + " horas";
  }
  return "Hace " + Math.trunc(sinceAgo / aDay) + " dias";
};

export default ListCard;
