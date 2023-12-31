import { useForm } from "react-hook-form";

import { useSignUp } from "../features/users/useSignUp";

import FormRow from "../components/styled_components/forms/FormRow";
import FormInputText from "../components/styled_components/forms/FormInputText";

function SignUp() {
  const { handleSubmit, reset, register, formState } = useForm({
    defaultValues: {},
  });
  const { signup, isLoading } = useSignUp();

  const { errors } = formState;

  function onSubmit({ firstName, lastName, email, password }) {
    signup(
      { firstName, lastName, email, password },
      {
        onSuccess: () => {
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
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <FormRow label="First Name" error={errors?.firstName?.message}>
          <FormInputText
            type="text"
            id="firstName"
            disabled={isLoading}
            {...register("firstName")}
          />
        </FormRow>
        <FormRow label="Last Name" error={errors?.lastName?.message}>
          <FormInputText
            type="text"
            id="lastName"
            disabled={isLoading}
            {...register("lastName")}
          />
        </FormRow>
        <FormRow label="Email" error={errors?.email?.message}>
          <FormInputText
            type="email"
            id="email"
            disabled={isLoading}
            {...register("email")}
          />
        </FormRow>
        <FormRow label="Password" error={errors?.password?.message}>
          <FormInputText
            type="password"
            id="password"
            disabled={isLoading}
            {...register("password")}
          />
        </FormRow>
        <FormRow>
          <button>Sign Up</button>
        </FormRow>
      </form>
    </>
  );
}

export default SignUp;
