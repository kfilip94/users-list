import React, { useState, useEffect } from "react";
import ListComponent from "./ListComponent";
import { useVirtual } from "react-virtual";

const List = ({ items, fetchMore, hasNextPage }) => {
  const listRef = React.useRef();

  const rowVirtualizer = useVirtual({
    size: items.length,
    parentRef: listRef,
    estimateSize: React.useCallback(() => 68, []),
    overscan: 10
  });

  const [loadingRef, setLoadingRef] = useState();
  const loader = React.useRef(fetchMore);

  const observer = React.useRef(
    new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          // fetchNextPage();
          loader.current();
        }
      },
      {
        root: listRef.current,
        threshold: 1
      }
    )
  );

  useEffect(() => {
    const currentElement = loadingRef;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [loadingRef]);

  useEffect(() => {
    loader.current = fetchMore;
  }, [fetchMore]);

  return (
    <ListComponent
      // {...props}
      setLoadingRef={setLoadingRef}
      rowVirtualizer={rowVirtualizer}
      items={items}
      parentRef={listRef}
      hasNextPage={hasNextPage}
    />
  );
};

export default List;
