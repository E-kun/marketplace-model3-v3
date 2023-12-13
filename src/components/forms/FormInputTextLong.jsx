import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

function FormInputText({ name, control, label }) {
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
          multiline
          label={label}
          variant="outlined"
        />
      )}
    />
  );
}

export default FormInputText;