import React, { useState } from "react";
import {
  Grid,
  Typography,
  Paper,
  InputAdornment,
  TextField,
  Button,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Theme from "../component/theme";
import AddIcon from "@mui/icons-material/Add";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { grey } from "@mui/material/colors";
import RichTable from "../component/Table";
import AlertDel from "../component/AlertDel";
import DialogForm from "../component/dialog/DialogForm";

export default function Company() {
  const [del, setDel] = useState(false);
  const [edit, setEdit] = useState(false)
  return (
    <>
      <Theme>
          <Paper sx={{pt:2, pl:1}}>
          <Grid container >
            <Grid item xs={6}>
              <TextField
                id="search"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
                fullWidth
                placeholder="Cari.."
              />
            </Grid>
            <Grid item xs={6}>
              <Grid container justifyContent="flex-end">
                <Button
                  sx={{ m: 1 }}
                  size="small"
                  variant="contained"
                  startIcon={<AddIcon />}
                  onClick={()=>setEdit(!edit)}
                >
                  Add New Company{" "}
                </Button>
                <Button
                  sx={{ m: 1 }}
                  size="small"
                  variant="contained"
                  color="white"
                  startIcon={<FilterAltIcon />}
                >
                  Filter{" "}
                </Button>
              </Grid>
            </Grid>
          </Grid>
          </Paper>
          {/* table */}
        <RichTable deletes={setDel}/>
        <AlertDel isopen={del} deletes={setDel}/>
        <DialogForm isopen={edit} deletes={setEdit}/>
      </Theme>
      
    </>
  );
}
