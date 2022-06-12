import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { FormControl, FormGroup, FormHelperText } from "@mui/material";

function DropDown(props) {
  let { dropdownfield, value, onChange, field, label, name, onBlur,error,helperText } = props;
  return (
    <FormControl fullWidth  variant="outlined" error={error}>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {props.label}
      </label>
      <Select
        labelId="demo-simple-select-label"
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        label=''
        fullWidth
      >
        {dropdownfield.map((d, i) => {
          return (
            <MenuItem key={i} value={d[field.fieldValue]}>
              {d[field.display_name]}
            </MenuItem>
          );
        })}
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
}

export default DropDown;
