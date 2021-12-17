import React from "react";
import { Formik } from "formik";
import Form from "./form";
import { Grid, Typography, Paper, Box } from "@mui/material";
import * as Yup from "yup";

export default function index() {
    const validationSchema = Yup.object({
        firstName: Yup.string("Masukan Nama Pertama")
                    .required("Nama Wajib Diisi"),
        lastName: Yup.string("Masukan Nama Akhir")
                    .required("Nama Akhir Wajib Diisi"),
        employeeId: Yup.string("Masukan employee id")
                    .required("employee id Wajib Diisi"),
      });
    
      const values = { firstName:"", lastName:"", employeeId:"" };
    
      return (
          <Box sx={{ p: 2}}>
              <Formik
                render={(props) => <Form {...props} />}
                initialValues={values}
                validationSchema={validationSchema}
              />
          </Box>
      );
}
