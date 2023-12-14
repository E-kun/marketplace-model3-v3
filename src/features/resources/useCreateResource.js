import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createResourceApi } from "../../services/apiResources";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export function useCreateResource() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: createResource, isLoading: isCreating } = useMutation({
    mutationFn: createResourceApi,
    onSuccess: () => {
      toast.success("New resource successfully created");
      queryClient.invalidateQueries({ queryKey: ["resources"] });
      navigate("/catalogue", { replace: true });
    },
    onError: (err) => toast.log(err.message),
  });

  return { isCreating, createResource };
}
