import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import styled from "@emotion/styled";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";

const CreateResourceInputs = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vh;
  /* background-color: #eee7e7; */
  padding: 1rem;
  /* box-shadow: -2px 2px 5px; */
`;

const CreateResourceInputListItem = styled(FormControl)`
  margin: 1rem;
  max-width: 100%;
  width: 100%;
`;

function CreateResource() {
  const [resourceName, setResourceName] = useState("");
  const [resourceDescription, setResourceDescription] = useState("");
  const [subject, setSubject] = useState("");
  const [price, setPrice] = useState(0);

  return (
    <>
      <Navbar />
      <CreateResourceInputs>
        <CreateResourceInputListItem>
          <InputLabel htmlFor="resource-name">Resource Name</InputLabel>
          <OutlinedInput
            id="resource-name"
            label="Resource Name"
          ></OutlinedInput>
        </CreateResourceInputListItem>

        <CreateResourceInputListItem>
          <TextField
            id="resource-description"
            label="Resource Description"
            multiline
            rows={10}
          ></TextField>
        </CreateResourceInputListItem>

        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="subject-small-label">Subject</InputLabel>
          <Select
            size="small"
            labelId="subject-small-label"
            label="Subject"
            id="subject"
          >
            <MenuItem value="">
              <em>Select a Subject</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <CreateResourceInputListItem>
          <InputLabel htmlFor="resource-price">Price</InputLabel>
          <OutlinedInput id="resource-price" label="Price"></OutlinedInput>
        </CreateResourceInputListItem>

        <Button variant="contained">Create Resource</Button>
      </CreateResourceInputs>

      <Footer />
    </>
  );
}

// <TextField
// type="text"
// id="resourceName"
// onChange={(e) => setResourceName(e.target.value)}
// value={resourceName}
// ></TextField>

export default CreateResource;
