import React from "react";
import { FormGroup, TextField } from "@mui/material";

function Textfield(props) {
  return (
    <FormGroup variant="outlined">
         <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" >
        {props.label}
        </label>
      <TextField  fullWidth  {...props} label=''  />
    </div>
    </FormGroup>
  );
}

export default Textfield;
