import { createContext, useContext, useState } from "react";

const RegionContext = createContext();

function RegionProvider({ children }) {
  const [region, setRegion] = useState("malaysia");

  return (
    <RegionContext.Provider value={{ region, setRegion }}>
      {children}
    </RegionContext.Provider>
  );
}

function useRegion() {
  const context = useContext(RegionContext);
  if (context === undefined)
    throw new Error("RegionContext was used outside of RegionProvider");
  return context;
}
export { RegionProvider, useRegion };
