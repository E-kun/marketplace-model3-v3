import styled from "@emotion/styled";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

import SubjectDropdownBox from "./SubjectDropdownBox";
import { TimeToLeaveOutlined } from "@mui/icons-material";

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

const levels = [
  "Primary 1",
  "Primary 2",
  "Primary 3",
  "Primary 4",
  "Primary 5",
  "Primary 6",
  "Form 1",
  "Form 2",
  "Form 3",
  "Form 4",
  "Form 5",
  "Form 6",
  "A-Levels",
  "O-Levels",
];

const resourceTypes = ["PDF", "Audio", "Video"];

function Filter() {
  // subjects.map((subject) => {
  //   console.log([subject.subjectId, subject.name]);
  // });

  return (
    <StyledFilterWindow>
      <SubjectDropdownBox />
      <FormControl sx={{ m: 1, minWidth: 180 }} size="string">
        <InputLabel id="level">Level</InputLabel>
        <Select labelId="level" id="level" label="Level">
          {levels.map((level) => (
            <MenuItem value={level} key={level}>
              {level}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 180 }} size="string">
        <InputLabel id="resource-type">Resource Type</InputLabel>
        <Select
          labelId="resource-type"
          id="resource-type"
          label="Resource Type"
        >
          {resourceTypes.map((type) => (
            <MenuItem value={type} key={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button variant="contained">Filter</Button>
    </StyledFilterWindow>
  );
}

export default Filter;
