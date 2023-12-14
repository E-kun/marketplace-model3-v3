import styled from "@emotion/styled";

import FormInputTextLong from "../components/forms/FormInputTextLong";
import { useForm } from "react-hook-form";
import CustomButton from "../components/CustomButton";
import { useUserSession } from "../features/users/useUserSession";
import { useSendFeedback } from "../features/users/useSendFeedback";
import { useGetFeedback } from "../features/users/useGetFeedback";
import FeedbackItem from "../components/FeedbackItem";

const FeedbackBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FeedbackList = styled.ul`
  list-style: none;
`;

function ProvideFeedback() {
  const { user } = useUserSession();
  const { isSending, provideFeedback } = useSendFeedback();
  const { isLoading, feedback } = useGetFeedback();
  const feedbackTemp = [{ id: 1, feedback: "Unable to pull feedback" }];

  const feedbackList = feedback || feedbackTemp;

  const { handleSubmit, reset, control, setValue } = useForm({
    defaultValues: {},
  });

  function handleClick(data) {
    data.author =
      user.user_metadata.firstName + " " + user.user_metadata.lastName;

    provideFeedback(data, {
      onSuccess: (data) => {
        reset();
      },
    });
  }

  return (
    <FeedbackBox>
      <FeedbackList>
        {feedbackList.map((message) => (
          <FeedbackItem key={message.id} feedback={message} />
        ))}
      </FeedbackList>
      <FormInputTextLong
        name={"feedback"}
        control={control}
        label={"Please provide feedback"}
      />
      <CustomButton handleClick={handleSubmit(handleClick)}>
        Send Feedback
      </CustomButton>
    </FeedbackBox>
  );
}

export default ProvideFeedback;
