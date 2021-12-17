import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect(props) {
  const [age, setAge] = useState(props.data[0].value);

  const handleChange = (event) => {
    setAge(event.target.value);
    props.value(event.target.value);
  };

  useEffect(()=>{
    props.value(age)
  },[])

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <label id={props.id} htmlFor={props.id} >{props.title}</label>
        <Select
        sx={{mt:1}}
          labelId={props.id}
          id={props.id}
          value={age}
          onChange={handleChange}
          defaultValue={props.data[0].value}
        >
          {props.data.map((data, index) => {
            return (
              <MenuItem key={index} value={data.value}>
                {data.text}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
