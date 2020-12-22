import { useContext } from "react";
import { ListSelectionContext } from "../contexts/ListSelectionContextProvider";

const useListSelectionContext = () => {
  const context = useContext(ListSelectionContext);
  if (!context)
    throw new Error(
      "useListSelectionContext hook must be used within the ListSelectionContextProvider"
    );
  return context;
};

export default useListSelectionContext;
