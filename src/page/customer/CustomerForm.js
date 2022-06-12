import React from "react";
import * as Props from "./customer-props";
import FormComponent from "../../common-component/form/FormComponent";

function CustomerForm() {
  return (
    <div className="p-5 w-1/2 m-auto" >

      <FormComponent
        initialValues={Props.initialValues}
        validationSchema={Props.validationSchema}
        fields={Props.fields}
      />


    </div>
  );
}

export default CustomerForm;
