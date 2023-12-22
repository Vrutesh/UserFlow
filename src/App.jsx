import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SelectBtn from './Components/SelectBtn/SelectBtn';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(moduleName, task, notes, timefrom, timeto, totalhours, eta, status,) {
  return { moduleName, task, notes, timefrom, timeto, totalhours, eta, status };
}

const rows = [
  createData('Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quaerat','  Lorem ipsum dolor sit amet', 'hello','10:00','12:30', '2:30', '20Hours' ),
];
export default function App() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Module Name</StyledTableCell>
            <StyledTableCell align="left">Task</StyledTableCell>
            <StyledTableCell align="left">Notes</StyledTableCell>
            <StyledTableCell align="left">Time from</StyledTableCell>
            <StyledTableCell align="left">Time to</StyledTableCell>
            <StyledTableCell align="left">Total hours</StyledTableCell>
            <StyledTableCell align="left">ETA</StyledTableCell>
            <StyledTableCell align="left">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.moduleName}
              </StyledTableCell>
              <StyledTableCell align="left">{row.task}</StyledTableCell>
              <StyledTableCell align="left">{row.notes}</StyledTableCell>
              <StyledTableCell align="left">{row.timefrom}</StyledTableCell>
              <StyledTableCell align="left">{row.timeto}</StyledTableCell>
              <StyledTableCell align="left">{row.totalhours}</StyledTableCell>
              <StyledTableCell align="left">{row.eta}</StyledTableCell>
              <StyledTableCell align="left">{row.status}</StyledTableCell>
              <StyledTableCell align="left"><SelectBtn/></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
