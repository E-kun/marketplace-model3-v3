import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Controller } from "react-hook-form";

import { subjects } from "../../data/subjects";
import { filetypes } from "../../data/filetypes";
import { levels } from "../../data/levels";

function FormInputDropdown({ name, control, label, type }) {
  let options = [];
  let inputId = "";

  if (type === "subjects") {
    options = subjects;
    inputId = "subject";
  }
  if (type === "filetypes") {
    options = filetypes;
    inputId = "filetype";
  }

  if (type === "levels") {
    options = levels;
    inputId = "level";
  }

  return (
    <FormControl sx={{ m: 1, width: 180 }} size="medium">
      <InputLabel id={inputId}>{label}</InputLabel>
      <Controller
        render={({ field: { onChange, value } }) => (
          <Select
            labelId={inputId}
            id={inputId}
            label={label}
            onChange={onChange}
            value={value}
            displayEmpty
            defaultValue=""
          >
            {options.map((option) => (
              <MenuItem value={option.id} key={option.id}>
                {option.name}
              </MenuItem>
            ))}
          </Select>
        )}
        control={control}
        name={name}
      />
    </FormControl>
  );
}

export default FormInputDropdown;
