import React, { useState } from "react";
import ShoppingList from "./components/ShoppingList";
import FormShoppingList from "./components/FormShoppingList";
import FormAddFriend from "./components/FormAddFriend";
import FriendsList from "./components/FriendsList";
import Header from "./components/Header";
import Button from "./components/Button";

const initialFriends = [
  {
    id: 118834,
    name: "Julia",
    image: "https://i.pravatar.cc/48?u=118834",
    itemQ: 2,
    quantiy: 5,
    itemList: [
      { id: 1, name: "Milk", quantity: 2 },
      { id: 2, name: "Butter", quantity: 3 },
    ],
  },
  {
    id: 2033370,
    name: "Bob",
    image: "https://i.pravatar.cc/48?u=2033370",
    itemQ: 2,
    quantiy: 12,
    itemList: [
      { id: 1, name: "Soup", quantity: 2 },
      { id: 2, name: "Sugar", quantity: 10 },
    ],
  },
  {
    id: 499477,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=499477",
    itemQ: 3,
    quantiy: 23,
    itemList: [
      { id: 1, name: "Eag", quantity: 20 },
      { id: 2, name: "Honey", quantity: 1 },
      { id: 3, name: "Bread", quantity: 2 },
    ],
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [showShoppingList, setShowShoppingList] = useState(false);

  const selectedItemList = friends.filter((f) => f.id === selectedFriend?.id)[0]
    ?.itemList;

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
    setShowShoppingList(false);
    setSelectedFriend(null);
  }

  function handleAddFriend(friend) {
    setShowAddFriend(false);
    setFriends((friends) => [...friends, friend]);
    // setShowAddFriend(false);
    setShowShoppingList(false);
  }

  function handleDeleteFriend(id) {
    setShowShoppingList(false);
    setFriends((friends) => friends.filter((friend) => friend.id !== id));
  }

  function handleDeleteItem(id) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend?.id === selectedFriend.id
          ? Object.fromEntries(
              Object.entries(friend).map(([key, val]) =>
                key === "itemList"
                  ? [key, friend.itemList?.filter((item) => item.id !== id)]
                  : [key, val]
              )
            )
          : friend
      )
    );
  }

  function handleSelection(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
    setShowShoppingList(true);
  }

  function handleItemQuantity(value, currItem) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend?.id === selectedFriend.id
          ? Object.fromEntries(
              Object.entries(friend).map(([key, val]) =>
                key === "itemList"
                  ? [
                      key,

                      friend.itemList?.map((item, index) =>
                        item.id === currItem.id
                          ? {
                              ...item,
                              quantity: value,
                            }
                          : item
                      ),
                    ]
                  : [key, val]
              )
            )
          : friend
      )
    );
  }

  function handleAddItem(item) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? {
              ...friend,
              itemList: [...friend?.itemList, item],
              itemQ: friend.itemQ + 1,
            }
          : friend
      )
    );
  }

  return (
    <div className="app">
      <Header />
      <div className="sidebar">
        <FriendsList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
          onDeleteFriend={handleDeleteFriend}
        />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>

      {selectedFriend && showShoppingList && (
        <div>
          <FormShoppingList
            selectedFriend={selectedFriend}
            onAddItem={handleAddItem}
          />

          <ShoppingList
            onItemQuntity={handleItemQuantity}
            onDeleteItem={handleDeleteItem}
            iList={selectedItemList}
          />
        </div>
      )}
    </div>
  );
}
