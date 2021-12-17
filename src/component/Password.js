import {useState, useEffect} from 'react'
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Typography } from '@mui/material';

export default function Password(props) {
    const [values, setValues] = useState({
        password: "",
        showPassword: false,
      });
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        props.change("password", event)
        props.data(event.target.value)
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    return (
       <>
        <label htmlFor="password">Password</label>
        <OutlinedInput
            sx={{mt:2}}
            id="password"
            name="password"
            type={values.showPassword ? "text" : "password"}
            fullWidth
            margin="normal"
            value={values.password}
            helperText={props.touched.password ? props.errors.password : ""}
            error={props.touched.password && Boolean(props.errors.password)}
            onChange={handleChange("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        {props.errors.password?<Typography variant="caption" color="crimson" >{props.errors.password}</Typography>:""}
      </>
    )
}
