import { FormControl, FormHelperText, TextareaAutosize } from "@mui/material";
import React from "react";

function TextArea(props) {
  let { helperText, error, value, onChange, onBlur, name } = props;
  return (
    <FormControl fullWidth variant="outlined" error={error}>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {props.label}
      </label>
      <TextareaAutosize
        variant="outlined"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        className={`border ${error&&'border-red-500 focus:border-red-500'} focus:outline-none`}
      />
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
}

export default TextArea;
