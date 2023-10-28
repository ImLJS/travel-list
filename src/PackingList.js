import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  item,
  onDeleteItem,
  onToggleItems,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = item;
  else if (sortBy === "description") {
    sortedItems = item
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else {
    sortedItems = item
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          name=""
          id=""
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort by Input Order</option>
          <option value="description">Sort by Description</option>
          <option value="packed">Sort by Packed Status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
