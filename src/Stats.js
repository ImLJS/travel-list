export default function Stats({ item }) {
  const numItems = item.length;
  const packedItems = item.filter((i) => i.packed === true).length;
  const percentageItems = Math.round((packedItems / numItems) * 100);

  if (numItems === 0) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list. 🚀</em>
      </footer>
    );
  }
  return (
    <footer className="stats">
      {
        <em>
          {packedItems === numItems
            ? "You got everything! Ready to go ✈️"
            : `💼 You have ${numItems} items on your list, and you already packed ${packedItems} (${percentageItems}%)`}
        </em>
      }
    </footer>
  );
}
