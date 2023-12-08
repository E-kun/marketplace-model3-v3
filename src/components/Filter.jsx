import styled from "@emotion/styled";

import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
} from "@mui/material";

const StyledFilterWindow = styled.div`
  max-width: 200px;
  max-height: max-content;
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
  return (
    <StyledFilterWindow>
      <StyledFormControl>
        <StyledFormGroup>
          <StyledFilterGroupTitle>Subjects</StyledFilterGroupTitle>
          <FormControlLabel control={<Checkbox />} label="Label" />
          <FormControlLabel control={<Checkbox />} label="Required" />
          <FormControlLabel control={<Checkbox />} label="Disabled" />
        </StyledFormGroup>

        <StyledFormGroup>
          <StyledFilterGroupTitle>Levels</StyledFilterGroupTitle>
          <FormControlLabel control={<Checkbox />} label="Label" />
          <FormControlLabel control={<Checkbox />} label="Required" />
          <FormControlLabel control={<Checkbox />} label="Disabled" />
        </StyledFormGroup>

        <StyledFormGroup>
          <StyledFilterGroupTitle>Resource Type</StyledFilterGroupTitle>
          <FormControlLabel control={<Checkbox />} label="Label" />
          <FormControlLabel control={<Checkbox />} label="Required" />
          <FormControlLabel control={<Checkbox />} label="Disabled" />
        </StyledFormGroup>

        <Button variant="contained">Filter</Button>
      </StyledFormControl>
    </StyledFilterWindow>
  );
}

export default Filter;
