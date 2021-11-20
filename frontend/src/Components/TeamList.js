import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(id, date, name, assignee, reporter, priority, complete) {
  return { id, date, name, assignee, reporter, priority, complete };
}

const rows = [
  createData(
    0,
    "16 Mar, 2021",
    "install env",
    "Vansh",
    "Vikrant",
    "High",
    "YES"
  ),
  createData(
    1,
    "19 Mar, 2021",
    "start frontend",
    "Vansh",
    "Vikrant",
    "High",
    "YES"
  ),
  createData(
    2,
    "20 Mar, 2021",
    "react function",
    "Vansh",
    "Vikrant",
    "High",
    "YES"
  ),
  createData(
    3,
    "01 Apr, 2021",
    "install env",
    "aman",
    "Vikrant",
    "High",
    "YES"
  ),
  createData(
    4,
    "05 Apr, 2021",
    "install env",
    "aryan",
    "Vikrant",
    "High",
    "YES"
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function TeamList() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Task Summary</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Assign Date</TableCell>
            <TableCell>Task</TableCell>
            <TableCell>Assignee</TableCell>
            <TableCell>Reporter</TableCell>
            <TableCell>Priority</TableCell>
            <TableCell align="right">Completed</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.assignee}</TableCell>
              <TableCell>{row.reporter}</TableCell>
              <TableCell>{row.priority}</TableCell>
              <TableCell align="right">{row.complete}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" component={Link} to="/projects">
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}
