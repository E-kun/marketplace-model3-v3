import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteResource as deleteResourceApi } from "../../services/apiResources";
import { useNavigate } from "react-router";

export function useDeleteResource() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: deleteResource, isLoading: isDeleting } = useMutation({
    mutationFn: deleteResourceApi,
    onSuccess: () => {
      navigate("/catalogue", { replace: true });
      queryClient.invalidateQueries({
        queryKey: ["resources"],
      });
    },
    onError: (err) => console.log(err.message),
  });

  return { isDeleting, deleteResource };
}
