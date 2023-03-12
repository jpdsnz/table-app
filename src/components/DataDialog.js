import React, { useRef, useEffect } from 'react';
// import { makeStyles } from '@mui/styles';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { Tabulator } from 'tabulator-tables';
import "tabulator-tables/dist/css/tabulator.min.css"; //import Tabulator stylesheet




// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });



// const isFriendly = (boolean) => {
//   console.log(boolean);
//   return boolean === true ? 'yes' : 'no'; //if isFriendly = true, 'yes', otherwise print no
// }





function DataDialog({ data, open, onClose, columns }) {

  const tableRef = useRef(null);

  useEffect(() => {
    if (tableRef.current) {
      const table = new Tabulator(tableRef.current, {
        columns,
        data,
      });

      return () => {
        table.destroy();
      };
    }
  }, [columns, data]);

  return (
    <Dialog maxWidth='xl' open={open} onClose={onClose}>
      <DialogTitle>Data Table</DialogTitle>
      <DialogContent>
       <div ref={tableRef}></div>
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






