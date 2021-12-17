import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectUn(props) {
  const [age, setAge] = useState(" ");

  const handleChange = (event) => {
    setAge(event.target.value);
    props.value(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        {props.title?<label id={props.id} htmlFor={props.id} >{props.title}</label>:null}
        <Select
        sx={{mt:1}}
          labelId={props.id}
          id={props.id}
          value={age}
          defaultValue=" "
          onChange={handleChange}
        >
        <MenuItem disabled value=" ">
            <em style={{color:"grey"}} >{props.placeholder}</em>
          </MenuItem>
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
