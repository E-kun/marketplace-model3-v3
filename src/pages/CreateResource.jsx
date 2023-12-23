import { useForm } from "react-hook-form";

import { useCreateResource } from "../features/resources/useCreateResource";
import { useUserSession } from "../features/users/useUserSession";
import { useFilter } from "../features/resources/useFilter";

import FormRow from "../components/forms/FormRow";
import CustomButton from "../components/CustomButton";
import FormInputText from "../components/forms/FormInputText";
import FormInputTextLong from "../components/forms/FormInputTextLong";

import { subjects } from "../data/subjects";
import { filetypes } from "../data/filetypes";
import { levels } from "../data/levels";

function CreateResource() {
  const { isCreating, createResource } = useCreateResource();
  const { user } = useUserSession();
  // const { subjects } = useFilter();

  const isWorking = isCreating;

  const { handleSubmit, reset, register, formState } = useForm({
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

    console.log(data);
    // createResource(
    //   { ...data, image: image, file: file },
    //   {
    //     onSuccess: (data) => {
    //       reset();
    //     },
    //   }
    // );
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <>
      <h2>Create a Resource</h2>

      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <FormRow label="Resource Name" error={errors?.name?.message}>
          <FormInputText
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
          <FormInputTextLong
            type="text"
            id="description"
            disabled={isWorking}
            {...register("description")}
            rows={15}
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
          <FormInputText
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
            multiple
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
          <button type="reset" color="error">
            Cancel
          </button>
          <button disabled={isWorking} color="primary">
            Create Resource
          </button>
        </FormRow>
      </form>
    </>
  );
}

export default CreateResource;
