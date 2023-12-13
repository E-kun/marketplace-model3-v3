import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

function FormInputText({ name, control, label, type }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant="outlined"
          type={type}
        />
      )}
    />
  );
}

export default FormInputText;