import styled from "@emotion/styled";
import { Button, FormControl, FormGroup } from "@mui/material";

import FormInputDropdown from "./forms/FormInputDropdown";
import { useForm } from "react-hook-form";

const StyledFilterWindow = styled.div`
  max-width: 200px;
  max-height: 600px;
  padding: 2em;
  background-color: #8fce9d;
  margin: 1rem 0;
  box-shadow: -5px 5px 5px #6ea179;
`;

function Filter({
  setSelectedPrice,
  setSelectedSubject,
  setSelectedType,
  setSelectedLevel,
}) {
  const { handleSubmit, control, resetField } = useForm({
    defaultValues: {
      subject_id: "",
      level: "",
      file_type: "",
      price_range: "",
    },
  });

  function onSubmit(data) {
    // console.log(data);
    setSelectedPrice(data.price_range);
    setSelectedSubject(data.subject_id);
    setSelectedType(data.file_type);
    setSelectedLevel(data.level);
  }

  function reset() {
    resetField("subject_id");
    resetField("level");
    resetField("file_type");
    resetField("price_range");
    setSelectedPrice();
    setSelectedSubject();
    setSelectedType();
    setSelectedLevel();
  }

  return (
    <StyledFilterWindow>
      <FormInputDropdown
        name="subject_id"
        control={control}
        label="Subject"
        type="subjects"
      />

      <FormInputDropdown
        name="level"
        control={control}
        label="Level"
        type="levels"
      />

      <FormInputDropdown
        name="file_type"
        control={control}
        label="File Type"
        type="filetypes"
      />

      <FormInputDropdown
        name="price_range"
        control={control}
        label="Price Range"
        type="price_range"
      />

      <Button variant="contained" onClick={reset}>
        Reset
      </Button>

      <Button variant="contained" onClick={handleSubmit(onSubmit)}>
        Filter
      </Button>
    </StyledFilterWindow>
  );
}

export default Filter;
