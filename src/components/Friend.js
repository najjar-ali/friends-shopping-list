import React from "react";
import Button from "./Button";

export default function Friend({
  friend,
  onSelection,
  selectedFriend,
  onDeleteFriend,
}) {
  const isSelected = selectedFriend?.id === friend.id;
  const totalQuantities = friend?.itemList?.reduce(
    (sum, curr) => sum + curr.quantity,
    0
  );
  return (
    <li className={isSelected ? "selected" : ""}>
      <Button onClick={() => onDeleteFriend(friend.id)}>❌</Button>
      {<img src={friend.image} alt={friend.name} />}

      <h2>{friend.name}</h2>

      <h4>{`Item(s)=${friend.itemQ}`}</h4>
      <h5>{`Total Quantity=${totalQuantities}`}</h5>

      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
