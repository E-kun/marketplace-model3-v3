import CustomButton from "../components/CustomButton";

import Form from "../components/forms/Form";
import FormInputText from "../components/forms/FormInputText";
import FormInputTextLong from "../components/forms/FormInputTextLong";
import FormInputDropdown from "../components/forms/FormInputDropdown";
import { useForm } from "react-hook-form";
import { useResources } from "../features/resources/useResources";
import { useNavigate, useParams } from "react-router";
import { useFilter } from "../features/resources/useFilter";
import { useUserSession } from "../features/users/useUserSession";
import { useUpdateResource } from "../features/resources/useUpdateResource";
import FormRow from "../components/forms/FormRow";

import { subjects } from "../data/subjects";
import { filetypes } from "../data/filetypes";
import { levels } from "../data/levels";

function UpdateResource() {
  const { resourceId } = useParams();
  const { user } = useUserSession();
  // const { resources } = useResources();
  // const { subjects } = useFilter();
  // const navigate = useNavigate();
  const { isUpdating, updateResource } = useUpdateResource();

  // let filteredResource = resources.filter(
  //   (resource) => resource.id === resourceId
  // );

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

    console.log(image, file);
    updateResource(
      {
        newResourceData: { ...data, image: image, file: file },
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
          <input
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
          <textarea
            type="text"
            id="description"
            disabled={isUpdating}
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
            disabled={isUpdating}
            {...register("price")}
          />
        </FormRow>
        <FormRow label="Resource Image" error={errors?.image?.message}>
          <input
            type="file"
            id="image"
            disabled={isUpdating}
            {...register("image")}
          />
        </FormRow>
        <FormRow label="Resource File" error={errors?.file?.message}>
          <input
            type="file"
            id="file"
            disabled={isUpdating}
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
            disabled={isUpdating}
            {...register("isLegitimate")}
          />
        </FormRow>
        <FormRow>
          <button type="reset">Cancel</button>
          <button disabled={isUpdating}>Create Resource</button>
        </FormRow>
      </form>
    </>
  );
}
// children, handleClick, variant, color

export default UpdateResource;
