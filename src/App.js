import React, { useState } from "react";
import "./styles.css";
import List from "./components/List/List";
import { useVirtual } from "react-virtual";
import { fetchUsers } from "./api/fakeApi";

export default function App() {
  const listRef = React.useRef();
  const [users, setUsers] = useState([]);

  React.useEffect(() => {
    fetchUsers().then((_users) => setUsers(_users));
  }, []);

  const rowVirtualizer = useVirtual({
    size: users.length,
    parentRef: listRef,
    estimateSize: React.useCallback(() => 64, []),
    overscan: 10
  });

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <List items={users} rowVirtualizer={rowVirtualizer} parentRef={listRef} />
    </div>
  );
}
