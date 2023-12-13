import { useForm } from "react-hook-form";

import FormInputText from "../components/forms/FormInputText";
import CustomButton from "../components/CustomButton";
import Form from "../components/forms/Form";
import { useSignUp } from "../features/users/useSignUp";

function SignUp() {
  const { signup, isLoading } = useSignUp();
  const { handleSubmit, reset, control } = useForm({
    defaultValues: {},
  });

  function onSubmit({ firstName, lastName, email, password }) {
    console.log(firstName, lastName, email, password);
    signup({ firstName, lastName, email, password });
  }

  return (
    <>
      <h2>Sign Up</h2>
      <Form>
        <FormInputText
          name="firstName"
          control={control}
          label="First Name"
          type="text"
        />
        <FormInputText
          name="lastName"
          control={control}
          label="Last Name"
          type="text"
        />
        <FormInputText
          name="email"
          control={control}
          label="Email Address"
          type="text"
        />
        <FormInputText
          name="password"
          control={control}
          label="Password"
          type="password"
        />

        <CustomButton
          variant="contained"
          color="primary"
          handleClick={handleSubmit(onSubmit)}
        >
          Sign Up
        </CustomButton>
      </Form>
    </>
  );
}

export default SignUp;
