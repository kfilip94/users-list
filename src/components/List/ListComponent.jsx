import React from "react";
import ListItem from "../ListItem/ListItem";

const ListComponent = ({ items, rowVirtualizer, parentRef }) => {
  return (
    <ul
      ref={parentRef}
      style={{ position: "relative", height: 300, overflowY: "scroll" }}
    >
      <li style={{ height: rowVirtualizer.totalSize }} />
      {rowVirtualizer.virtualItems.map(({ index, size, start }) => {
        const item = items[index];
        return <ListItem key={item.id} item={item} size={size} start={start} />;
      })}
    </ul>
  );
};

export default ListComponent;
