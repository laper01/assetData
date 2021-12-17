import React from "react";
import {
  Grid,
  Typography,
  Paper,
  IconButton,
  Box,
  Divider,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import Form from '../form/company'

export default function EditCompany() {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={8} sx={{ mt: 3 }}>
        <Paper sx={{ p: 1 }}>
          <Grid container>
            <Grid item xs={8}>
              <Typography variant="h6"> ADD New Company </Typography>
            </Grid>
            <Grid item xs={4}>
              <Grid container justifyContent="flex-end">
                <IconButton>
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
          <Form/>
        </Paper>
      </Grid>
    </Grid>
  );
}
