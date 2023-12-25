import { useForm } from "react-hook-form";
import { useParams } from "react-router";

import { useUserSession } from "../features/users/useUserSession";
import { useUpdateResource } from "../features/resources/useUpdateResource";

import CustomButton from "../components/CustomButton";
import FormInputText from "../components/forms/FormInputText";
import FormInputTextLong from "../components/forms/FormInputTextLong";
import FormRow from "../components/forms/FormRow";

import { subjects } from "../data/subjects";
import { filetypes } from "../data/filetypes";
import { levels } from "../data/levels";
import { DropzoneField } from "../components/DropzoneField";
import { useState } from "react";

function UpdateResource() {
  const [files, setFiles] = useState([]);
  const [images, setImages] = useState([]);
  const { resourceId } = useParams();
  const { user } = useUserSession();
  // const { resources } = useResources();
  // const { subjects } = useFilter();
  // const navigate = useNavigate();
  const { isUpdating, updateResource } = useUpdateResource();

  // let filteredResource = resources.filter(
  //   (resource) => resource.id === resourceId
  // );

  const { handleSubmit, reset, register, formState } = useForm({
    defaultValues: {},
  });

  const { errors } = formState;

  function onSubmit(data) {
    // const image = typeof data.image === "string" ? data.image : data.image[0];
    // const file = typeof data.file === "string" ? data.file : data.file[0];

    let tempSubject = subjects.filter(
      (subject) => subject.id === data.subject_id
    );
    data.subject = tempSubject[0].name;
    data.author =
      user.user_metadata.firstName + " " + user.user_metadata.lastName;

    // console.log(image, file);
    updateResource(
      {
        newResourceData: { ...data, images: images, files: files },
        id: resourceId,
      },
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
      <h2>Update Resource</h2>

      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <FormRow label="Resource Name" error={errors?.name?.message}>
          <FormInputText
            type="text"
            id="name"
            disabled={isUpdating}
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
            disabled={isUpdating}
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
            disabled={isUpdating}
            {...register("price")}
          />
        </FormRow>
        <FormRow label="Resource Image">
          <DropzoneField
            name="imageDropzone"
            inputType="image"
            setFiles={setImages}
          />
        </FormRow>
        <FormRow label="Resource File">
          <DropzoneField name="fileDropzone" setFiles={setFiles} />
        </FormRow>
        <FormRow
          label="I can confirm that this resource is of my own work and has not been plagiarised or stolen from another source."
          error={errors?.isLegitimate?.message}
        >
          <input
            required
            type="checkbox"
            id="isLegitimate"
            disabled={isUpdating}
            {...register("isLegitimate")}
          />
        </FormRow>
        <FormRow>
          <button type="reset">Cancel</button>
          <button disabled={isUpdating}>Update Resource</button>
        </FormRow>
      </form>
    </>
  );
}
// children, handleClick, variant, color

export default UpdateResource;
