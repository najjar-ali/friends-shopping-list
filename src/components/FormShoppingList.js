import React, { useState } from "react";
import Button from "./Button";

export default function FormShoppingList({ selectedFriend, onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuntity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) return;
    const id = crypto.randomUUID();
    const newItem = {
      id,
      name: name,
      quantity: quantity,
    };
    onAddItem(newItem);
    setName("");
    setQuntity(1);
  }

  return (
    <form className="form-shopping-list" onSubmit={handleSubmit}>
      <h2>{`${selectedFriend.name}'s shopping list`}</h2>
      <div className="add-item">
        <label>Add Item: </label>
        <input
          type="text"
          placeholder="New Item"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <Button>Add</Button>
      </div>
      <div>{/* <ShoppingList itemList={selectedFriend.itemList} /> */}</div>

      {/* <Button>Save</Button> */}
    </form>
  );
}
