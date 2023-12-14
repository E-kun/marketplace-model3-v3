import { useMutation, useQueryClient } from "@tanstack/react-query";
import supabase from "../../services/supabase";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

async function authenticate({ email, password }) {
  const { data: userSession, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return userSession;
}

function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: authenticateUser, isLoading } = useMutation({
    mutationFn: ({ email, password }) => authenticate({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueriesData(["user"], user.user);
      navigate("/catalogue", { replace: true });
    },
    onError: (err) => {
      console.log(err.message),
        toast.error("Provided email or password are incorrect");
    },
  });
  return { isLoading, authenticateUser };
}

export default useLogin;
