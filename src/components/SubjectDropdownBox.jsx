import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

import { subjects } from "../data/subjects";

function SubjectDropdownBox() {
  return (
    <FormControl sx={{ m: 1, width: 180 }} size="medium">
      <InputLabel id="subject">Subject</InputLabel>
      <Select labelId="subject" id="subject" label="Subject">
        {subjects.map((subject) => (
          <MenuItem value={subject.name} key={subject.subjectId}>
            {subject.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SubjectDropdownBox;
