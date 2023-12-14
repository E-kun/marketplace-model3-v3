import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

function FormInputTextLong({ name, control, label }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        // formState,
      }) => (
        <TextField
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          multiline
          rows={5}
          label={label}
          variant="outlined"
        />
      )}
    />
  );
}

export default FormInputTextLong;
