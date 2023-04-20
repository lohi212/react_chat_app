import React, { useEffect, useState } from "react";

const ChatFilter = ({ setFilterVal, filterVal }) => {
  const [val, setVal] = useState(filterVal);

  useEffect(() => {
    // Debounce of 0.5ms
    setTimeout(() => {
      setFilterVal(val);
    }, 500);
  }, [val]);

  return (
    <div className="filter-container bottom-divider">
      <b>Filter by Title/ Order ID</b>
      <div>
        <input
          value={val}
          onChange={(e) => setVal(e.target.value)}
          placeholder="Start typing to search"
          className="input-container"
        />
      </div>
    </div>
  );
};

export default ChatFilter;
