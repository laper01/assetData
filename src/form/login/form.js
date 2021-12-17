import { useRef, useState } from "react";
import { Grid, TextField, Button, } from "@mui/material";
import axios from "axios";
import Password from "../../component/Password";

export default function Form(props) {
  const emailRef = useRef();
  const [loading, setLoading] = useState(false);
  const [passwords, setPasswords] = useState('');

  const {
    values: { email, password },
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

  async function handleSend(e) {
    e.preventDefault();
    setLoading(true);
    const payload = {};
    payload.email = emailRef.current.value;
    payload.password = password;
    try{
      console.log(payload)
      const response = await axios.post(
        "https://petronasdemo.aa.assetdata.xyz/api/v1/a/hash-login",
        { email: payload.email, password: payload.password }
      );
      console.log(response.data);
    }catch(e){
      console.log(e)
    }
    setLoading(false);
  }

  return (
    <form onSubmit={handleSend.bind(null)}>
      <label htmlFor="email">Email</label>
      <TextField
        id="email"
        name="email"
        fullWidth
        margin="normal"
        helperText={touched.email ? errors.email : ""}
        error={touched.email && Boolean(errors.email)}
        value={email}
        onChange={change.bind(null, "email")}
        inputRef={emailRef}
        placeholder="@mail.com"
      />
      <Password touched={touched} errors={errors} data={setPasswords} change={change}/>
      <Button
        type="submit"
        sx={{ mt: 1 }}
        fullWidth
        variant="contained"
        color="primary"
        disabled={!isValid || loading}
      >
        Submit
      </Button>
      <Button type="submit" sx={{ mt: 1 }} fullWidth color="primary">
        Forgot Password
      </Button>
    </form>
  );
}
