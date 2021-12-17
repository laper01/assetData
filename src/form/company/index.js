import React from "react";
import { Formik } from "formik";
import Form from "./form";
import * as Yup from "yup";

export default function index({close}) {
  const validationSchema = Yup.object({
    company: Yup.string("Masukan Nama Pertama").required(
      "Nama Perusahaan Wajib Diisi"
    ),
    address1: Yup.string("Masukan Nama Akhir").required("Alamat Wajib Diisi"),
  });

  const values = { company: "", address1: "" };

  return (
    <Formik
      render={(props) => <Form close={close} {...props} />}
      initialValues={values}
      validationSchema={validationSchema}
    />
  );
}
