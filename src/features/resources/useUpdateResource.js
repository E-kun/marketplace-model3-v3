import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createResourceApi } from "../../services/apiResources";
import { useNavigate } from "react-router";

export function useUpdateResource() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: createResource, isLoading: isCreating } = useMutation({
    mutationFn: createResourceApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["resources"] });
      navigate("/catalogue", { replace: true });
    },
    onError: (err) => console.log(err.message),
  });

  return { isCreating, createResource };