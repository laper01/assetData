import { useRef, useState } from "react";
import { Grid, TextField, Button, Divider } from "@mui/material";
import axios from "axios";
import { red } from "@mui/material/colors";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import BasicSelect from "../../component/Select";
import SelectUn from "../../component/SelectUn";

const companySelect = [
  { text: "Petronas", value: "petronas" },
  { text: "another", value: "anoher" },
];
const departementSelect = [
  { text: "hrd", value: "hrd" },
  { text: "another", value: "anoher" },
];
const JobSelect = [
  { text: "dev", value: "dev" },
  { text: "another", value: "anoher" },
];


export default function From(props) {
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [departement, setDepatement] = useState("");
  const [job, setJob] = useState('');

  function handleSend(e) {
    e.preventDefault();
  }

  const {
    values: { firstName, lastName, employeeId },
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
      <Grid container>
        <Grid item xs={12} md={5} sx={{ m: 1 }}>
          <label htmlFor="firstName">
            First Name <Required />{" "}
          </label>
          <TextField
            id="firstName"
            name="firstName"
            fullWidth
            margin="normal"
            helperText={touched.firstName ? errors.firstName : ""}
            error={touched.firstName && Boolean(errors.firstName)}
            value={firstName}
            onChange={change.bind(null, "firstName")}
            placeholder="First Name"
          />
        </Grid>
        <Grid item xs={12} md={5} sx={{ m: 1 }}>
          <label htmlFor="lastName">
            Last Name <Required />
          </label>
          <TextField
            id="lastName"
            name="lastName"
            fullWidth
            type="lastName"
            margin="normal"
            value={lastName}
            helperText={touched.lastName ? errors.lastName : ""}
            error={touched.lastName && Boolean(errors.lastName)}
            onChange={change.bind(null, "lastName")}
            placeholder="Last name"
          />
        </Grid>
        <Grid item xs={12} md={5} sx={{ m: 1 }}>
          <BasicSelect
            data={companySelect}
            value={setCompany}
            title="Company"
            id="company"
          />
        </Grid>
        <Grid item xs={12} md={5} sx={{ m: 1 }}>
          <SelectUn
            data={departementSelect}
            value={setDepatement}
            title="Departement"
            id="departement"
            label="Select Departement"
            placeholder="Select Departement"
          />
        </Grid>
        <Grid item xs={12} md={5} sx={{ m: 1 }}>
          <SelectUn
            data={JobSelect}
            value={setJob}
            title="Job Title"
            id="JobTitle"
            label="Job Title"
            placeholder="Select Job Title"
          />
        </Grid>
        <Grid item xs={12} md={5} sx={{ m: 1 }}>
          <label htmlFor="employeeId">Employee ID</label>
          <TextField
            id="employeeId"
            name="employeeId"
            fullWidth
            type="employeeId"
            margin="normal"
            value={employeeId}
            helperText={touched.employeeId ? errors.employeeId : ""}
            error={touched.employeeId && Boolean(errors.employeeId)}
            onChange={change.bind(null, "employeeId")}
            placeholder="add Employeer id"
          />
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ m: 1 }}>
        <label htmlFor="phone"> Phone Number </label>
        <PhoneInput
          country={"id"}
          preferredCountries={["id", "my"]}
          value={phone}
          onChange={(phone) => setPhone(phone)}
          placeholder="+62"
        />
      </Grid>
      <Grid container justifyContent="flex-end">
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Button
          type="submit"
          sx={{ mt: 1 }}
          variant="contained"
          color="primary"
          disabled={!isValid}
        >
          Save
        </Button>
      </Grid>
    </form>
  );
}
