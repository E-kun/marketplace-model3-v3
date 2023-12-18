import { useMutation } from "@tanstack/react-query";
import { uploadFileApi } from "../../services/apiResources";
import toast from "react-hot-toast";

export function useUploadFile() {
  const { mutate: uploadFile, isLoading: isUploading } = useMutation({
    mutationFn: uploadFileApi,
    onSuccess: () => {
      toast.success("File successfully uploaded");
    },
    onError: (err) => toast.log(err.message),
  });

  return { isUploading, uploadFile };
}
