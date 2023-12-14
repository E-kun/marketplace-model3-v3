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

function UpdateResource() {
  const { resourceId } = useParams();
  const { user } = useUserSession();
  // const { resources } = useResources();
  const { subjects } = useFilter();
  // const navigate = useNavigate();
  const { isUpdating, updateResource } = useUpdateResource();

  // let filteredResource = resources.filter(
  //   (resource) => resource.id === resourceId
  // );

  const { handleSubmit, reset, control, setValue } = useForm({
    defaultValues: {},
  });

  function onSubmit(data) {
    // console.log(user);
    console.log(data);
    // console.log(subjects);
    let tempSubject = subjects.filter(
      (subject) => subject.id === data.subject_id
    );
    data.subject = tempSubject[0].name;
    data.author =
      user.user_metadata.firstName + " " + user.user_metadata.lastName;

    console.log(data, resourceId);
    updateResource(
      { newResourceData: data, id: resourceId },
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
        <CustomButton handleClick={handleSubmit(onSubmit)}>
          Update Resource
        </CustomButton>
      </Form>
    </>
  );
}
// children, handleClick, variant, color

export default UpdateResource;
