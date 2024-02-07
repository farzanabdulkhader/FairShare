import styled, { StyleSheetManager } from "styled-components";
import Friend from "./Friend";
import Button from "../ui/Button";
import Logo from "../ui/Logo";
import { Link, useNavigate } from "react-router-dom";
import { useFriend } from "../context/FriendContext";

const StyledFriendList = styled.div`
  /* border: 1px solid red; */
  margin-top: 7rem;
`;

const StyledHeader = styled.div`
  height: 7rem;
  background-color: var(--color-dark-0);
  border-top: 1px solid var(--color-dark-1);
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem 0 3rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 70%;
  z-index: 100;

  .button {
    margin-right: 1rem;
    /* border: 1px solid yellow; */
  }
`;

function FriendList() {
  const { friends, onSelectFriend } = useFriend();
  const navigate = useNavigate();

  return (
    <StyledFriendList>
      <StyledHeader>
        <Link to={"/"}>
          <Logo size="small" />
        </Link>
        <StyleSheetManager shouldForwardProp={(prop) => prop !== "variation"}>
          <Button
            variation="round"
            size="small"
            className="button"
            onClick={() => {
              navigate("add-friend");
              onSelectFriend(null);
            }}
          >
            +
          </Button>
        </StyleSheetManager>
      </StyledHeader>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </StyledFriendList>
  );
}

export default FriendList;
