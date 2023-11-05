import React from "react";
import ShoppingItem from "./ShoppingItem";

export default function ShoppingList({ iList, onItemQuntity, onDeleteItem }) {
  console.log("In Shopping list");
  console.log(iList);
  return (
    <div className="shopping-list">
      <ul>
        {iList?.map((item) => (
          <ShoppingItem
            key={item.id}
            item={item}
            onItemQuntity={onItemQuntity}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>
    </div>
  );
}
