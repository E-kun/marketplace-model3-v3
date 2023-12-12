import styled from "@emotion/styled";
import { Button, FormControl, FormGroup } from "@mui/material";

import FormInputDropdown from "./forms/FormInputDropdown";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";

const StyledFilterWindow = styled.div`
  max-width: 200px;
  max-height: 600px;
  padding: 2em;
  background-color: #8fce9d;
  margin: 1rem 0;
  box-shadow: -5px 5px 5px #6ea179;
`;

const StyledFormControl = styled(FormControl)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const StyledFormGroup = styled(FormGroup)`
  display: flex;
  flex-direction: column;
  padding: 0 2em;
  margin: 1em;
  background-color: #dadacd;
  justify-content: flex-start;
`;

const StyledFilterGroupTitle = styled.h4`
  margin: 0 auto;
`;

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams({});
  // const currentFilter = searchParams.get(filterField) || options.at(0).value;

  const { handleSubmit, reset, control, resetField } = useForm({
    defaultValues: {},
  });

  function onSubmit(value) {
    console.log(value);
    // searchParams.set([
    //   ["subject", value.subject],
    //   ["level", value.level],
    //   ["file_type", value.file_type],
    // ]);

    setSearchParams({
      subject_id: value.subject_id,
      level: value.level,
      file_type: value.file_type,
    });
    // reset();
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

      <Button variant="contained" onClick={handleSubmit(onSubmit)}>
        Filter
      </Button>
    </StyledFilterWindow>
  );
}

export default Filter;
