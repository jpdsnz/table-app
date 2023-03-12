import React from 'react';
import { makeStyles } from '@mui/styles';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const isFriendly = (boolean) => {
  console.log(boolean);
  return boolean === true ? 'yes' : 'no'; //if isFriendly = true, 'yes', otherwise print no
}

function DataDialog({ data, open, onClose }) {
  const classes = useStyles();

  return (
    <Dialog maxWidth='xl' open={open} onClose={onClose}>
      <DialogTitle>Data Table</DialogTitle>
      <DialogContent>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 1200 }} className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Gender</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Age</TableCell>
                <TableCell align="right">Friendly</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.gender}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.age}</TableCell>
                  <TableCell align="right">{isFriendly(row.friendly)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DataDialog;






