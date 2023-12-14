import { useMutation, useQueryClient } from "@tanstack/react-query";
import { provideFeedbackApi } from "../../services/apiFeedback";
import toast from "react-hot-toast";

export function useSendFeedback() {
  const queryClient = useQueryClient();

  const { mutate: provideFeedback, isLoading: isSending } = useMutation({
    mutationFn: provideFeedbackApi,
    onSuccess: () => {
      toast.success("Feedback successfully sent!");
      queryClient.invalidateQueries({ queryKey: ["feedback"] });
    },
    onError: (err) => toast.log(err.message),
  });

  return { isSending, provideFeedback };
}
