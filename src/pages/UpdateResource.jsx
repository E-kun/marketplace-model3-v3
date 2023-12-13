import { useState } from "react";

import Button from "../components/CustomButton";

import Form from "../components/forms/Form";
import FormInputText from "../components/forms/FormInputText";
import FormInputTextLong from "../components/forms/FormInputTextLong";
import FormInputDropdown from "../components/forms/FormInputDropdown";
import { useForm } from "react-hook-form";

function UpdateResource() {
  const { handleSubmit, reset, control, setValue } = useForm({
    defaultValues: {},
  });

  function onSubmit(data) {
    // console.log(user);
    console.log(data);
    // console.log(subjects);
    // let tempSubject = subjects.filter(
    //   (subject) => subject.id === data.subject_id
    // );
    // data.subject = tempSubject[0].name;
    // data.author = "John Smith";
    // createResource(data);
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <>
      <h2>Update Resource</h2>
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
        <Button onClick={handleSubmit(onSubmit)}>Update Resource</Button>
      </Form>
    </>
  );
}

export default UpdateResource;
