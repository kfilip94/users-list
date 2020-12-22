import React, { useState, useEffect } from "react";
import ListComponent from "./ListComponent";
import { useVirtual } from "react-virtual";

const List = (props) => {
  const { items, fetchMore, hasNextPage } = props;
  const listRef = React.useRef();
  const [loadingRef, setLoadingRef] = useState();

  const rowVirtualizer = useVirtual({
    size: items.length,
    parentRef: listRef,
    estimateSize: React.useCallback(() => 68, []),
    overscan: 10
  });

  useEffect(() => {
    let observer;

    if (loadingRef) {
      if (IntersectionObserver) {
        const callback = (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting) {
            fetchMore();
          }
        };

        const options = {
          root: listRef.current,
          threshold: 1
        };

        observer = new IntersectionObserver(callback, options);
        observer.observe(loadingRef);
      }
    }

    return () => {
      if (loadingRef) {
        observer.unobserve(loadingRef);
      }
    };
  }, [loadingRef, fetchMore]);

  return (
    <ListComponent
      {...props}
      setLoadingRef={setLoadingRef}
      rowVirtualizer={rowVirtualizer}
      items={items}
      parentRef={listRef}
      hasNextPage={hasNextPage}
    />
  );
};

export default List;
