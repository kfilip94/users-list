import React, { createContext, useState } from "react";

export const ListSelectionContext = createContext();

const ListSelectionContextProvider = ({ children }) => {
  const [selectedItems, setSelectedItems] = useState({ ALL_SELECTED: false });

  const toggleItemSelection = (itemId) => {
    if (itemId === "ALL_SELECTED") {
      setSelectedItems({ ALL_SELECTED: !selectedItems.ALL_SELECTED });
    } else {
      const checked =
        selectedItems.ALL_SELECTED && selectedItems[itemId] !== false
          ? false
          : !selectedItems[itemId];

      const _selectedUsers = {
        ...selectedItems,
        [itemId]: checked
      };
      setSelectedItems(_selectedUsers);
    }
  };

  const getSelectedItemsCount = (items) => {
    if (!selectedItems.ALL_SELECTED) {
      return Object.values(selectedItems).filter((value) => !!value).length;
    }
    const deselectedUsers = Object.keys(selectedItems).filter(
      (key) => !selectedItems[key] && key !== "ALL_SELECTED"
    ).length;
    return items.length >= deselectedUsers ? items.length - deselectedUsers : 0;
  };

  const isChecked = (itemId) => {
    return selectedItems[itemId] !== undefined
      ? selectedItems[itemId]
      : selectedItems.ALL_SELECTED;
  };

  return (
    <ListSelectionContext.Provider
      value={{
        selectedItems,
        isChecked,
        getSelectedItemsCount,
        toggleItemSelection
      }}
    >
      {children}
    </ListSelectionContext.Provider>
  );
};

export default ListSelectionContextProvider;
