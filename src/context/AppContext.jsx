import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {
  let mobile = "9066364784";
  let name = "silan";
  return (
    <AppContext.Provider value={{ mobile, name }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
