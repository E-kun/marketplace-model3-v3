import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

function FormInputFile({ name, control, label, accept }) {
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
          size="small"
          error={!!error}
          onChange={onChange}
          value={value}
          label={label}
          variant="outlined"
          type="file"
          accept={accept}
        />
      )}
    />
  );
}

export default FormInputFile;
