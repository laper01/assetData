import React, { useState } from "react";
import Calendar from "../component/Calendar";
import {
  Grid,
  Typography,
  Paper,
  InputAdornment,
  TextField,
  Button,
  Box,
  Divider,
} from "@mui/material";
import ChartDonut from "../component/ChartDonut";
import SelectUn from "../component/SelectUn";
import LinearProgress from "../component/Linear";
import TableHome from "../component/table/TableHome";
import AddModeratorIcon from '@mui/icons-material/AddModerator';

const JobSelect = [
  { text: "dev", value: "dev" },
  { text: "another", value: "anoher" },
];

const LinearData = [
  { title: "laper", value: 32 },
  { title: "lap", value: 12 },
  { title: "laer", value: 22 },
  { title: "aper", value: 52 },
  { title: "ler", value: 82 },
  { title: "laaaper", value: 12 },
  { title: "laps", value: 33 },
  { title: "lapesassar", value: 34 },
  { title: "lapesr", value: 43 },
  { title: "lapers", value: 11 },
];

export default function Home() {
  const [job, setJob] = useState("");
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const data01 = [
    { name: "Group A", value: 5 },
    { name: "Group B", value: 4 },
    { name: "Group C", value: 1 },
    { name: "Group D", value: 1 },
  ];
  return (
    <>
    <Grid spacing={1} container sx={{m:2}}>
    <Grid item xs={6} md={4} sx={{color:"white"}}>
        <Paper sx={{p:2}} sx={{backgroundColor:"green"}} >
        <Grid container sx={{p:2}} >
            <AddModeratorIcon color="action" /> <Typography color="white" variant="caption" sx={{ml:1, fontWeight:"bold"}} >Total Policies</Typography>
        </Grid>
        <Typography align="center" color="white" variant="body1" sx={{fontSize:30,fontWeight:"bold"}} >14</Typography>
        </Paper>
    </Grid>
    {/*  */}
    <Grid item xs={6} md={4} sx={{color:"white"}}>
        <Paper sx={{p:2}} sx={{backgroundColor:"red"}} >
        <Grid container sx={{p:2}} >
            <AddModeratorIcon color="action" /> <Typography color="white" variant="caption" sx={{ml:1, fontWeight:"bold"}} >Total Policies</Typography>
        </Grid>
        <Typography align="center" color="white" variant="body1" sx={{fontSize:30,fontWeight:"bold"}} >14</Typography>
        </Paper>
    </Grid>
    {/*  */}
    <Grid item xs={6} md={4} sx={{color:"white"}}>
        <Paper sx={{p:2}} sx={{backgroundColor:"blue"}} >
        <Grid container sx={{p:2}} >
            <AddModeratorIcon color="action" /> <Typography color="white" variant="caption" sx={{ml:1, fontWeight:"bold"}} >Total Policies</Typography>
        </Grid>
        <Typography align="center" color="white" variant="body1" sx={{fontSize:30,fontWeight:"bold"}} >14</Typography>
        </Paper>
    </Grid>
    {/*  */}
    <Grid item xs={6} md={4} sx={{color:"white"}}>
        <Paper sx={{p:2}} sx={{backgroundColor:"yellow"}} >
        <Grid container sx={{p:2}} >
            <AddModeratorIcon color="action" /> <Typography color="white" variant="caption" sx={{ml:1, fontWeight:"bold"}} >Total Policies</Typography>
        </Grid>
        <Typography align="center" color="white" variant="body1" sx={{fontSize:30,fontWeight:"bold"}} >14</Typography>
        </Paper>
    </Grid>
    {/*  */}
    <Grid item xs={6} md={4} sx={{color:"white"}}>
        <Paper sx={{p:2}} sx={{backgroundColor:"purple"}} >
        <Grid container sx={{p:2}} >
            <AddModeratorIcon color="action" /> <Typography color="white" variant="caption" sx={{ml:1, fontWeight:"bold"}} >Total Policies</Typography>
        </Grid>
        <Typography align="center" color="white" variant="body1" sx={{fontSize:30,fontWeight:"bold"}} >14</Typography>
        </Paper>
    </Grid>
    </Grid>
      <Grid container justifyContent="center">
        <Grid item xs={11}>
          <Calendar />
        </Grid>
      </Grid>
      <Grid spacing={5} container sx={{ ml: 2, mt: 2 }}>
        <Grid item xs={12} md={5}>
          <Paper sx={{ p: 2 }}>
            <Grid container justifyContent="space-between">
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Asset Category{" "}
              </Typography>
              <SelectUn
                data={JobSelect}
                value={setJob}
                id="JobTitle"
                label="Job Title"
                placeholder="Select Job Title"
              />
            </Grid>
            <Divider sx={{ mt: 2 }} />
            {/* lonier */}
            {LinearData.map((data, index) => (
              <Box sx={{ mt: 2 }}>
                <LinearProgress title={data.title} value={data.value} />
              </Box>
            ))}
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Insurance Claim{" "}
            </Typography>
            <Divider sx={{ mt: 2 }} />
            <Grid container justifyContent="center">
              <ChartDonut />
            </Grid>
            <Typography
              align="center"
              variant="body1"
              sx={{ fontWeight: "bold" }}
            >
              Ready for Approval{" "}
            </Typography>
            <Grid container sx={{ mt: 2 }}>
              {data01.map((entry, index) => (
                <Grid item md={4} sx={{ mt: 1, ml: 1 }}>
                  <Grid container>
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        backgroundColor: COLORS[index % COLORS.length],
                        borderRadius: 5,
                      }}
                    />
                    <Typography variant="caption">{entry.name}</Typography>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      {/* table */}
      <Grid container>
        <TableHome/>
      </Grid>
    </>
  );
}
