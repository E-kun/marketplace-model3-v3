import styled from "@emotion/styled";
import { Button, FormControl } from "@mui/material";

import { useCreateResource } from "../src/features/resources/useCreateResource";
import { useForm } from "react-hook-form";

import Form from "../src/components/forms/Form";
import FormInputText from "../src/components/forms/FormInputText";
import FormInputTextLong from "../src/components/forms/FormInputTextLong";
import FormInputDropdown from "../src/components/forms/FormInputDropdown";
import { useUserSession } from "../src/features/users/useUserSession";
import { useFilter } from "../src/features/resources/useFilter";

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
        <Button onClick={handleSubmit(onSubmit, onError)}>
          Create Resource
        </Button>
      </Form>
    </>
  );
}

export default CreateResource;
