import { useForm } from "react-hook-form";
import { useUserSession } from "../features/users/useUserSession";
import { useSendFeedback } from "../features/users/useSendFeedback";
import { useGetFeedback } from "../features/users/useGetFeedback";

import CustomButton from "../components/ui/CustomButton";
import FeedbackItem from "../components/ui/FeedbackItem";
import FormInputTextLong from "../components/styled_components/forms/FormInputTextLong";
import { FeedbackList } from "../components/styled_components/feedback/FeedbackList";
import { FeedbackBox } from "../components/styled_components/feedback/FeedbackBox";

function ProvideFeedback() {
  const { user } = useUserSession();
  const { isSending, provideFeedback } = useSendFeedback();
  const { isLoading, feedback } = useGetFeedback();
  const feedbackTemp = [{ id: 1, feedback: "Unable to pull feedback" }];

  const feedbackList = feedback || feedbackTemp;

  const { handleSubmit, reset, control } = useForm({
    defaultValues: {},
  });

  function handleClick(data) {
    data.author =
      user.user_metadata.firstName + " " + user.user_metadata.lastName;

    provideFeedback(data, {
      onSuccess: () => {
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
