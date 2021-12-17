import { useRef, useState } from "react";
import {
  Grid,
  Typography,
  Paper,
  Box,
  TextField,
  CardActionArea,
  Divider,
  Button
} from "@mui/material";
import axios from "axios";
import Photo from "../../images/photo.png";
import { red } from "@mui/material/colors";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import SelectCountry from "../../component/SelectCountry";

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

export default function Form(props) {
  function handleSend(e) {
    e.preventDefault();
  }

  const {
    values: { company, address1 },
    errors,
    touched,
    handleSubmit,
    handleChange,
    isValid,
    setFieldTouched,
  } = props;

  const change = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };
  function Required() {
    return <span style={{ color: red[800] }}> *</span>;
  }
  return (
    <form onSubmit={handleSend.bind(null)}>
      <Grid container sx={{ mt: 2 }}>
        <Grid item xs={5}>
          <label htmlFor="company">
            Company Name <Required />{" "}
          </label>
          <TextField
            id="company"
            name="company"
            fullWidth
            margin="normal"
            helperText={touched.company ? errors.company : ""}
            error={touched.company && Boolean(errors.company)}
            value={company}
            onChange={change.bind(null, "company")}
            placeholder="Company Name"
          />
        </Grid>
        {/* photo */}
        <Grid item xs={5} sx={{ m: 1 }}>
          <Grid container justifyContent="flex-end">
            <label htmlFor="logo"> Company Logo </label>
            <Grid item xs={12} sx={{ mb: 1 }} />
            <Box sx={{ width: 100, height: 100 }} style={styles.photo}>
              <CardActionArea
                id="logo"
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
        </Grid>
      </Grid>
      {/* address */}
      <Typography variant="h6" sx={{ mt: 2 }}>
        Address
      </Typography>
      <Divider />
      <Grid container sx={{mt:1}}>
          <Grid item xs={12}>
          <label htmlFor="address1">
            Address1  <Required />{" "}
          </label>
          <TextField
            id="address1"
            name="address1"
            fullWidth
            margin="normal"
            helperText={touched.address1 ? errors.address1 : ""}
            error={touched.address1 && Boolean(errors.address1)}
            value={address1}
            onChange={change.bind(null, "address1")}
            placeholder="address1"
          />
          </Grid>
          {/* addres2 */}
          <Grid item xs={12}>
          <label htmlFor="address2">
            Address2 {" "}
          </label>
          <TextField
            id="address2"
            name="address2"
            fullWidth
            margin="normal"
            placeholder="address2"
          />
          </Grid>
        {/* country */}
        <Grid xs={12} md={5} sx={{m:1}} >
        <label htmlFor="country">
            Country{" "}
          </label>
          <Box sx={{mb:2}} />
        <SelectCountry id="country"/>
        </Grid>
        {/* state */}
        <Grid xs={12} md={5} sx={{m:1}}  >
        <label htmlFor="state">
            State{" "}
          </label>
          <TextField
            id="state"
            name="state"
            fullWidth
            margin="normal"
            placeholder="state"
          />
        </Grid>
        {/* City */}
        <Grid xs={12} md={5} sx={{m:1}}  >
        <label htmlFor="city">
            City {" "}
          </label>
          <TextField
            id="city"
            name="city"
            fullWidth
            margin="normal"
            placeholder="city"
          />
        </Grid>
        {/* street */}
        <Grid xs={12} md={5} sx={{m:1}}  >
        <label htmlFor="street">
            Street/Building {" "}
          </label>
          <TextField
            id="street"
            name="street"
            fullWidth
            margin="normal"
            placeholder="street"
          />
        </Grid>
        {/* postal code zip */}
        <Grid xs={12} md={5} sx={{m:1}} >
        <label htmlFor="zip">
            Postal Code/ZIP {" "}
          </label>
          <TextField
            id="zip"
            name="zip"
            fullWidth
            margin="normal"
            placeholder="Postal Code/ZIP "
          />
        </Grid>
      </Grid>
      {/* other */}
      <Typography variant="h6" sx={{ mt: 2 }}>
        Other Info
      </Typography>
      <Divider />
      <Grid container sx={{mt:1}}>
         {/* street */}
         <Grid xs={12} md={5} sx={{m:1}}  >
        <label htmlFor="regis">
        Registrasion ID {" "}
          </label>
          <TextField
            id="regis"
            name="regis"
            fullWidth
            margin="normal"
          />
        </Grid>
        {/* postal code zip */}
        <Grid xs={12} md={5} sx={{m:1}} >
        <label htmlFor="tax">
            TAX ID {" "}
          </label>
          <TextField
            id="tax"
            name="tax"
            fullWidth
            margin="normal"
          />
        </Grid>
      </Grid>
      {/* save */}
      <Grid container justifyContent="flex-end" >
        <Grid item xs={12}>
          <Divider sx={{mb:2}}/>
        </Grid>
        <Button
        onClick={props.close}
        >
          Close
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={!isValid}
          sx={{ ml: 1 }}
        >
          Save
        </Button>
      </Grid>
    </form>
  );
}
