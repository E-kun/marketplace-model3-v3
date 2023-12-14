import styled from "@emotion/styled";
import { Button, FormControl } from "@mui/material";

import { useCreateResource } from "../features/resources/useCreateResource";
import { useForm } from "react-hook-form";

import Form from "../components/forms/Form";
import FormInputText from "../components/forms/FormInputText";
import FormInputTextLong from "../components/forms/FormInputTextLong";
import FormInputDropdown from "../components/forms/FormInputDropdown";
import { useUserSession } from "../features/users/useUserSession";
import { useFilter } from "../features/resources/useFilter";

const CreateResourceForm = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vh;
  /* background-color: #eee7e7; */
  padding: 1rem;
  /* box-shadow: -2px 2px 5px; */
`;

function CreateResource() {
  const { isCreating, createResource } = useCreateResource();
  const { isAuthenticated, user } = useUserSession();
  const { subjects } = useFilter();
  const isWorking = isCreating;

  const { handleSubmit, reset, control, setValue } = useForm({
    defaultValues: {},
  });

  function onSubmit(data) {
    // console.log(user);
    // console.log(data);
    // console.log(subjects);
    let tempSubject = subjects.filter(
      (subject) => subject.id === data.subject_id
    );
    data.subject = tempSubject[0].name;
    data.author =
      user.user_metadata.firstName + " " + user.user_metadata.lastName;

    createResource(data, {
      onSuccess: (data) => {
        reset();
      },
    });
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <>
      <h2>Create a Resource</h2>
      <Form>
        <FormInputText
          name={"name"}
          control={control}
          label={"Resource Name"}
        />
        <FormInputTextLong
          name={"description"}
          control={control}
          label={"Resource Description"}
        />
        <FormInputDropdown
          name="subject_id"
          control={control}
          label="Subject"
          type="subjects"
        />

        <FormInputDropdown
          name="file_type"
          control={control}
          label="File Type"
          type="filetypes"
        />

        <FormInputText name={"price"} control={control} label={"Price"} />
        <Button onClick={handleSubmit(onSubmit)}>Create Resource</Button>
      </Form>
    </>
  );
}

export default CreateResource;
