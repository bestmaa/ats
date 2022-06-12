import { Button } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import DropDown from "./field/DropDown";
import TextArea from "./field/TextArea";
import Textfield from "./field/TextField";

function FormComponent(props) {
  let { initialValues, validationSchema, fields } = props;

  let onSubmit = (values) => {
    console.log("values", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({
        handleSubmit,
        values,
        errors,
        touched,
        setFieldValue,
        handleChange,
        handleBlur,
      }) => {
        // console View

        return (
          <Form
            id="formPage"
            className="form"
            onSubmit={handleSubmit}
          >
            {fields?.map((field, index) => {
              // text
              if (field.datatype === "text") {
                return (
                  <React.Fragment key={index}>
                    <Textfield
                      fullWidth
                      name={field.id}
                      value={values[field.id]}
                      onChange={handleChange}
                      error={touched[field.id] && Boolean(errors[field.id])}
                      helperText={touched[field.id] && errors[field.id]}
                      label={field.label}
                      onBlur={handleBlur}
                    />
                  </React.Fragment>
                );
              }
              //   dropDown
              if (field.datatype === "dropdown") {
                return (
                  <React.Fragment key={index}>
                    <DropDown
                      name={field.id}
                      field={field}
                      dropdownfield={field.dropdownfield}
                      value={values[field.id]}
                      onChange={(event) => {
                        setFieldValue(field.id, event.target.value);
                      }}
                      error={touched[field.id] && Boolean(errors[field.id])}
                      helperText={touched[field.id] && errors[field.id]}
                      onBlur={handleBlur}
                      label={field.label}
                    />
                  </React.Fragment>
                );
              }
              // textArea
              if (field.datatype === "textarea") {
                return (
                  <React.Fragment key={index}>
                    <TextArea
                      name={field.id}
                      error={touched[field.id] && Boolean(errors[field.id])}
                      label={field.label}
                      value={values[field.id]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={touched[field.id] && errors[field.id]}
                      rows={3}
                    />
                  </React.Fragment>
                );
              }

              return null;
            })}


        <Button variant="outlined" type="submit">Submit</Button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormComponent;
