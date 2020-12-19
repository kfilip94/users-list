import React from "react";
import ListItem from "../ListItem/ListItem";
import styled from "styled-components";

const List = styled.ul`
  width: 100%;
  position: relative;
  height: 650px;
  overflow-y: scroll;
  margin: auto;

  box-sizing: border-box;
  padding: 0;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ListComponent = ({
  items,
  rowVirtualizer,
  parentRef,
  selectedUsers,
  setSelectedUsers
}) => {
  // console.log("rowVirtualizer: ", rowVirtualizer);
  return (
    <List ref={parentRef}>
      <li style={{ height: rowVirtualizer.totalSize }} />
      {rowVirtualizer.virtualItems.map(({ index, size, start }) => {
        const item = items[index];
        return (
          <ListItem
            key={item.id}
            item={item}
            size={size}
            start={start}
            parentRef={parentRef}
          />
        );
      })}
    </List>
  );
};

export default ListComponent;
