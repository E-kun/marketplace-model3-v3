import { useQuery } from "@tanstack/react-query";
import { getFeedback } from "../../services/apiFeedback";

export function useGetFeedback() {
  const {
    isLoading,
    data: feedback,
    error,
  } = useQuery({
    queryKey: ["feedback"],
    queryFn: getFeedback,
  });

  //   console.log(feedback);

  return { isLoading, error, feedback };
}
