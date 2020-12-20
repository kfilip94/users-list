import React, { useContext, useState, useEffect } from "react";
import ListComponent from "./ListComponent";
import { UsersContext } from "../../contexts/UsersContext";
import { useVirtual } from "react-virtual";

const List = (props) => {
  const {
    data,
    loadMore,
    hasMorePages,
    updateQueryParams,
    queryParams
  } = useContext(UsersContext);
  const listRef = React.useRef();

  // useEffect(() => {
  //   loadMore();
  // }, []);

  const rowVirtualizer = useVirtual({
    size: data.length,
    parentRef: listRef,
    estimateSize: React.useCallback(() => 68, []),
    overscan: 10
  });

  const [loadingRef, setLoadingRef] = useState();
  const loader = React.useRef(loadMore);

  const observer = React.useRef(
    new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
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
    loader.current = loadMore;
  }, [loadMore]);

  return (
    <ListComponent
      // {...props}
      hasMorePages={hasMorePages}
      setLoadingRef={setLoadingRef}
      rowVirtualizer={rowVirtualizer}
      items={data}
      parentRef={listRef}
    />
  );
};

export default List;
