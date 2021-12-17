import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { grey, red } from '@mui/material/colors';
import WarningIcon from '@mui/icons-material/Warning';
import {
    Grid,
    Typography,
    Paper,
    IconButton,
    Box,
    Divider,
  } from "@mui/material";
  import ClearIcon from "@mui/icons-material/Clear";
  import Form from "../../form/company";

export default function DialogForm({isopen, deletes}) {

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
        <Paper sx={{ p: 1 }}>
          <Grid container>
            <Grid item xs={8}>
              <Typography variant="h6"> ADD New Company </Typography>
            </Grid>
            <Grid item xs={4}>
              <Grid container justifyContent="flex-end">
                <IconButton onClick={handleClose}>
                  <ClearIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
          <Divider />
          {/*  */}
          <Grid container sx={{ p: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {" "}
              Company Info{" "}
            </Typography>
          </Grid>
          <Divider />
          {/* from */}
          <Form close={handleClose}/>
        </Paper>
      </Dialog>
    </div>
  );
}