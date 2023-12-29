import { useState } from "react";

export function useCurrency() {
  const [currency, setCurrency] = useState("");

  const changeCurrency = (region) => {
    switch (region) {
      case "malaysia":
        setCurrency("MYR");
        break;
      case "brunei":
        setCurrency("BND");
        break;
      case "singapore":
        setCurrency("SGD");
        break;
      case "indonesia":
        setCurrency("IDR");
        break;
      default:
        break;
    }
  };

  return [currency, changeCurrency];
}
