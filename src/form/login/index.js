import React from "react";
import { Formik } from "formik";
import Form from "./form";
import { Grid, Typography, Paper, Box } from "@mui/material";
import * as Yup from "yup";

const center = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
};

export default function index() {
  const validationSchema = Yup.object({
    email: Yup.string("Masukan Email Anda")
      .email("Email Format Salah")
      .required("Email Wajib Diisi"),
    password: Yup.string("")
      .min(8, "Password minimal 8 Karakter")
      .required("Masukan password Anda"),
  });

  const values = { email: "", password: "" };

  return (
    <Grid container justifyContent="center">
        <Typography variant="h4" align="center" sx={{ mt: 2 }}>
          AssertData.io
        </Typography>
        <Grid item xs={12} />
      <Box sx={{ p: 2, maxWidth:600 }}>
        <Paper elevation={12} sx={{ p: 4 }}>
          <Formik
            render={(props) => <Form {...props} />}
            initialValues={values}
            validationSchema={validationSchema}
          />
        </Paper>
      </Box>
    </Grid>
  );
}
