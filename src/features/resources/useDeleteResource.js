import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteResource as deleteResourceApi } from "../../services/apiResources";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export function useDeleteResource() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: deleteResource, isLoading: isDeleting } = useMutation({
    mutationFn: deleteResourceApi,
    onSuccess: () => {
      toast.success("Resource has been deleted");

      navigate("/catalogue", { replace: true });
      queryClient.invalidateQueries({
        queryKey: ["resources"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteResource };
}
