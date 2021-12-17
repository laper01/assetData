import React from "react";
import { Grid, Typography, Box, Paper, CardActionArea } from "@mui/material";
import Photo from "../images/photo.png";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { blue } from "@mui/material/colors";
import FormProfile from '../form/profile'

const styles = {
  photo: {
    backgroundImage: `url(${Photo})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "right",
    position: "relative",
    paddingBottom: 10,
    paddingLeft: 10,
  },
  buttPhoto: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "right",
  },
};
const flexContainer = {};

export default function Profile() {
  return (
    <Box sx={{ p: 4 }}>
      <Grid container>
        <Grid item id="photo">
          <Box sx={{ width: 100, height: 100 }} style={styles.photo}>
            <CardActionArea
              sx={{ height: 30, borderRadius: 50, width: 40 }}
              style={styles.buttPhoto}
            >
              <Paper
                elevation={12}
                sx={{ height: 30, borderRadius: 50, width: 30 }}
              >
                <AddPhotoAlternateIcon />
              </Paper>
            </CardActionArea>
          </Box>
        </Grid>
        <Grid item sx={{ ml: 2 }}>
          <Typography variant="body1" sx={{ fontWeight: "bold", mb: 2 }}>
            {" "}
            Account Admin{" "}
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            {" "}
            @admin.com{" "}
          </Typography>
          <Paper sx={{ backgroundColor: blue[600], p:1 }}>
            {" "}
            <Typography align="center" color="white" variant="body1">
            Business Account    
            </Typography>{" "}
          </Paper>
        </Grid>
      </Grid>
      {/* form */}
        <FormProfile/>
    </Box>
  );
}
