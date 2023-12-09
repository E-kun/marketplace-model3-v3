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
import SubjectDropdownBox from "../components/SubjectDropdownBox";

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
      <h2>Create a Resource</h2>
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

        <SubjectDropdownBox />
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
