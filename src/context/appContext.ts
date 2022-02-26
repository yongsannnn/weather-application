import { createContext, useContext } from "react";

export type AppContextType = {
  storeData: any;
};

export const AppContext = createContext<AppContextType>({
  storeData: {},
});

export const useAppContext = () => {
  return useContext(AppContext);
};
