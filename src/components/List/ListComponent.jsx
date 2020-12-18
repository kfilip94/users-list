import React from "react";
import ListItem from "../ListItem/ListItem";
import styled from "styled-components";

const CheckboxPlaceholder = styled.ul`
  max-width: 716px;
  position: relative;
  height: 650px;
  overflow-y: scroll;
  margin: auto;
`;

const ListComponent = ({ items, rowVirtualizer, parentRef }) => {
  // console.log("rowVirtualizer: ", rowVirtualizer);
  return (
    <CheckboxPlaceholder ref={parentRef}>
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
    </CheckboxPlaceholder>
  );
};

export default ListComponent;
