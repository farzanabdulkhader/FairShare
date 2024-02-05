import { createContext, useContext, useState } from "react";
import initialFriends from "../src/data/friends";
import { useNavigate } from "react-router-dom";

const FriendContext = createContext();

function FriendProvider({ children }) {
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const navigate = useNavigate();

  function handleSelectFriend(friend) {
    setSelectedFriend(friend);
    friend && navigate(`/split-form/${friend.id}`);
  }

  function handleAddFriend(newFriend) {
    setFriends((prevFriends) => [...prevFriends, newFriend]);
    navigate("/friends");
  }

  function handleBillSplit(newBalance) {
    setFriends((prevFriends) =>
      prevFriends.map((friend) =>
        friend.id == selectedFriend.id
          ? { ...friend, balance: friend.balance + newBalance }
          : friend
      )
    );
    navigate("/friends");
    setSelectedFriend(null);
  }

  return (
    <FriendContext.Provider
      value={{
        friends,
        selectedFriend,
        onAddFriend: handleAddFriend,
        onSelectFriend: handleSelectFriend,
        onBillSplit: handleBillSplit,
      }}
    >
      {children}
    </FriendContext.Provider>
  );
}
function useFriend() {
  const context = useContext(FriendContext);
  return context;
}

export { FriendProvider, useFriend };
