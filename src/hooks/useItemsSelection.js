// import React, { createContext, useState, useMemo, useCallback } from "react";

// export const UserContext = createContext();

// const useItemsSelection = () => {
//   const [selectedUsers, setSelectedUsers] = useState({ ALL_SELECTED: false });

//   const toggleSelection = (userId) => {
//     if (userId === "ALL_SELECTED") {
//       setSelectedUsers({ ALL_SELECTED: !selectedUsers.ALL_SELECTED });
//     } else {
//       const checked =
//         selectedUsers.ALL_SELECTED && selectedUsers[userId] !== false
//           ? false
//           : !selectedUsers[userId];

//       const _selectedUsers = {
//         ...selectedUsers,
//         [userId]: checked
//       };
//       setSelectedUsers(_selectedUsers);
//     }
//   };

//   const selectedUsersCount = useMemo(() => {
//     return Object.values(selectedUsers).filter((value) => !!value).length;
//   }, [selectedUsers]);

//   return { selectedItems, selectedItemsCount, toggleItemSelection };
// };

// export default UserContextProvider;
