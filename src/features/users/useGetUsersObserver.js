import { QueryObserver, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useUserSession } from "./useUserSession";

export const useGetUsersObserver = () => {
  const get_users = useUserSession();

  const queryClient = useQueryClient();

  const [users, setUsers] = useState(() => {
    const data = queryClient.setQueryData(["user"]);
    return data ?? [];
  });

  useEffect(() => {
    const observer = new QueryObserver(queryClient, { queryKey: ["user"] });

    const unsubscribe = observer.subscribe((result) => {
      if (result.data) setUsers(result.data);
    });

    return () => {
      unsubscribe();
    };
  }, [queryClient]);

  return {
    ...get_users,
    data: users,
  };
};
