import React from "react";
import Friend from "./Friend";

export default function FriendsList({
  friends,
  onSelection,
  selectedFriend,
  onDeleteFriend,
}) {
  return (
    <div>
      <ul>
        {friends.map((friend) => (
          <Friend
            friend={friend}
            onSelection={onSelection}
            selectedFriend={selectedFriend}
            onDeleteFriend={onDeleteFriend}
            key={friend.id}
          />
        ))}
      </ul>
    </div>
  );
}
