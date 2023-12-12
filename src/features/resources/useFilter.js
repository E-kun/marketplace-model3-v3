import { useQuery } from "@tanstack/react-query";
import { getSubjects } from "../../services/apiResources";

export function useFilter() {
  const {
    isLoading,
    data: subjects,
    error,
  } = useQuery({
    queryKey: ["subjects"],
    queryFn: getSubjects,
  });

  return { isLoading, error, subjects };
}
