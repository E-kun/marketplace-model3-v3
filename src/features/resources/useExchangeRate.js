import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

function useExchangeRate() {
  const [exchangeRate, setExchangeRate] = useState(0);

  //   export function useResources() {
  //     const {
  //       isLoading,
  //       data: resources,
  //       error,
  //     } = useQuery({
  //       queryKey: ["resources"],
  //       queryFn: getResources,
  //     });

  //     return { isLoading, error, resources };
  //   }

  return <div></div>;
}

export default useExchangeRate;
