import styled from "@emotion/styled";
import { Button, FormControl, MenuItem } from "@mui/material";
import { useForm } from "react-hook-form";

import { useCreateResource } from "../features/resources/useCreateResource";
import { useUserSession } from "../features/users/useUserSession";
import { useFilter } from "../features/resources/useFilter";
import FormRow from "../components/forms/FormRow";

import { subjects } from "../data/subjects";
import { filetypes } from "../data/filetypes";
import { levels } from "../data/levels";
import CustomButton from "../components/CustomButton";

function CreateResource() {
  const { isCreating, createResource } = useCreateResource();
  const { isAuthenticated, user } = useUserSession();
  // const { subjects } = useFilter();

  const isWorking = isCreating;

  const { handleSubmit, reset, control, setValue, register, formState } =
    useForm({
      defaultValues: {},
    });

  const { errors } = formState;

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];
    const file = typeof data.file === "string" ? data.file : data.file[0];

    let tempSubject = subjects.filter(
      (subject) => subject.id === data.subject_id
    );
    data.subject = tempSubject[0].name;
    data.author =
      user.user_metadata.firstName + " " + user.user_metadata.lastName;

    createResource(
      { ...data, image: image, file: file },
      {
        onSuccess: (data) => {
          reset();
        },
      }
    );
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <>
      <h2>Create a Resource</h2>

      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <FormRow label="Resource Name" error={errors?.name?.message}>
          <input
            type="text"
            id="name"
            disabled={isWorking}
            {...register("name")}
          />
        </FormRow>
        <FormRow
          label="Resource Description"
          error={errors?.description?.message}
        >
          <textarea
            type="text"
            id="description"
            disabled={isWorking}
            {...register("description")}
          />
        </FormRow>
        <FormRow label="Subject" error={errors?.subject?.message}>
          <select {...register("subject_id")}>
            {subjects.map((subject) => (
              <option value={subject.id} key={subject.id}>
                {subject.name}
              </option>
            ))}
          </select>
        </FormRow>
        <FormRow label="Class Level" error={errors?.level?.message}>
          <select {...register("level")}>
            {levels.map((level) => (
              <option value={level.id} key={level.id}>
                {level.name}
              </option>
            ))}
          </select>
        </FormRow>
        <FormRow label="File Type" error={errors?.file_type?.message}>
          <select {...register("file_type")}>
            {filetypes.map((type) => (
              <option value={type.id} key={type.id}>
                {type.name}
              </option>
            ))}
          </select>
        </FormRow>

        <FormRow label="Resource Price" error={errors?.price?.message}>
          <input
            type="number"
            id="price"
            disabled={isWorking}
            {...register("price")}
          />
        </FormRow>
        <FormRow label="Resource Image" error={errors?.image?.message}>
          <input
            type="file"
            id="image"
            disabled={isWorking}
            {...register("image")}
          />
        </FormRow>
        <FormRow label="Resource File" error={errors?.file?.message}>
          <input
            type="file"
            id="file"
            disabled={isWorking}
            {...register("file")}
          />
        </FormRow>
        <FormRow
          label="I can confirm that this resource is of my own work and has not been plagiarised or stolen from another source."
          error={errors?.isLegitimate?.message}
        >
          <input
            required
            type="checkbox"
            id="isLegitimate"
            disabled={isWorking}
            {...register("isLegitimate")}
          />
        </FormRow>
        <FormRow>
          <CustomButton type="reset" color="error">
            Cancel
          </CustomButton>
          <CustomButton disabled={isWorking} color="primary">
            Create Resource
          </CustomButton>
        </FormRow>
      </form>
    </>
  );
}

export default CreateResource;
