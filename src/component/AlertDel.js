import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { grey, red } from '@mui/material/colors';
import { Divider, Grid } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';

export default function AlertDel({isopen, deletes}) {

  const handleClose = () => {
    deletes(false);
  };

  return (
    <div>
      <Dialog
        open={isopen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete Company"}
        </DialogTitle>
        <Divider/>
        <DialogContent>
        <Grid container >
            <WarningIcon sx={{mr:3, color: red[600]}}/>
          <DialogContentText id="alert-dialog-description">
            are you sure to delete ?
          </DialogContentText>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button sx={{color:grey[500]}} variant="outlined" onClick={handleClose}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={handleClose} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}