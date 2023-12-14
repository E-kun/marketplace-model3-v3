import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateResourceApi } from "../../services/apiResources";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export function useUpdateResource() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: updateResource, isLoading: isUpdating } = useMutation({
    mutationFn: ({ newResourceData, id }) =>
      updateResourceApi(newResourceData, id),
    onSuccess: () => {
      toast.success("Resource updated");
      queryClient.invalidateQueries({ queryKey: ["resources"] });
      navigate("/catalogue", { replace: true });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateResource };
}
