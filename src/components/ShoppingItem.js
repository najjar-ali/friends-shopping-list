import React, { useState } from "react";
import Button from "./Button";

export default function ShoppingItem({ item, onItemQuntity, onDeleteItem }) {
  function handleMinus() {
    if (item.quantity === 1) {
      onDeleteItem(item.id);
    }
    onItemQuntity(item.quantity - 1, item);
  }

  function handlePlus() {
    onItemQuntity(item.quantity + 1, item);
  }
  function handleInput(e) {
    if (Number(e.target.value) === 0) {
      onDeleteItem(item.id);
    }
    onItemQuntity(Number(e.target.value), item);
  }

  return (
    <li className="shopping-list-item">
      <h2>{`${item.name} `}</h2>

      <Button onClick={() => onDeleteItem(item.id)}>❌</Button>

      <h3>Quantity:</h3>
      <div className="quant">
        <Button onClick={handleMinus}>➖</Button>
        <input type="text" value={item.quantity} onChange={handleInput} />
        {/* <em> {quantity} </em> */}
        <Button onClick={handlePlus}>➕</Button>
      </div>
    </li>
  );
}
