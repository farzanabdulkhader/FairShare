import styled, { StyleSheetManager, css } from "styled-components";
import Button2 from "../ui/Button2";
import { useParams } from "react-router-dom";
import { useFriend } from "../FriendContext";

const StyledFriend = styled.div`
  height: 8.2rem;
  background-color: var(--color-dark-1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  border-bottom: 1px solid var(--color-dark-2);

  &:hover {
    background-color: #484848;
  }

  ${(props) =>
    props.isSelected &&
    css`
      background-color: #484848;
      border-left: 5px solid #ec625f;
    `}
`;

const Styledleft = styled.div`
  flex: 0.2;

  img {
    border-radius: 50%;
    width: 4.5rem;
    height: 4.5rem;
    margin-top: 0.6rem;
    object-fit: contain;
  }
`;

const StyledRight = styled.div`
  flex: 0.8;

  h4 {
    margin-bottom: 0.15rem;
  }

  p {
    font-size: 1.4rem;
    margin-top: 0.15rem;
  }
`;

function Friend({ friend }) {
  const { onSelectFriend, selectedFriend } = useFriend();
  const { id, name, imageUrl, balance } = friend;

  const isSelected = selectedFriend?.id == id;

  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "isSelected"}>
      <StyledFriend isSelected={isSelected}>
        <Styledleft>
          <img src={imageUrl} />
        </Styledleft>
        <StyledRight>
          <h4>{name}</h4>
          <p
            style={{
              color: `${
                balance < 0
                  ? "rgb(250,100,100)"
                  : balance > 0 && "rgb(100,200,100)"
              }`,
            }}
          >
            {balance > 0 && `${name} owe you $${balance}`}
            {balance < 0 && `You owe ${name} $${-balance}`}
            {balance === 0 && `You and ${name} are even`}
          </p>
        </StyledRight>
        <Button2 size="small" onClick={() => onSelectFriend(friend)}>
          Select
        </Button2>
      </StyledFriend>
    </StyleSheetManager>
  );
}

export default Friend;
