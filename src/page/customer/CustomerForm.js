import React from "react";
import * as Props from "./customer-props";
import FormComponent from "../../common-component/form/FormComponent";

function CustomerForm() {
  return (
    <FormComponent
      initialValues={Props.initialValues}
      validationSchema={Props.validationSchema}
      fields={Props.fields}
    />
  );
}

export default CustomerForm;
