import styled, { css } from "styled-components";
import Button from "../ui/Button";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useFriend } from "../FriendContext";

const StyledForm = styled.div`
  font-size: 1.4rem;
  position: relative;

  @media (max-width: 400px) {
    margin: 0;
  }
`;

const StyledBox = styled.div`
  background-color: var(--color-dark-1);
  border-radius: 20px;
  padding: 40px;

  .inputLine {
    /* border: 1px solid white; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 1080px) {
    /* border: 2px dotted purple; */
    margin-right: 2rem;
  }

  @media (max-width: 800px) {
    padding: 20px;
    height: 350px;
  }

  @media (max-width: 400px) {
    padding: 10px;
    height: 350px;
    width: 100%;
    min-width: 200px;
  }

  input {
    background-color: var(--color-dark-2);
    border: none;
    width: 24rem;
    border-radius: 0.5rem;
    padding: 0.8rem 1.5rem;
  }

  label {
    display: inline;
    margin-right: 0.5rem;
  }
`;

function NewFriendForm() {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const { onAddFriend } = useFriend();

  const navigate = useNavigate();

  function handleSubmit() {
    const newFriend = {
      id: Math.floor(Math.random() * 10000000),
      name,
      imageUrl: `/images/${imageUrl}`,
      balance: 0,
    };
    onAddFriend(newFriend);
  }

  return (
    <StyledForm>
      <IoCloseCircleOutline
        onClick={() => navigate("/friends")}
        style={{
          color: "#ec625f",
          fontSize: "2.6rem",
          float: "right",
          position: "absolute",
          right: "0.6rem",
          top: "0.6rem",
        }}
      />
      <div>
        <StyledBox>
          <div className="inputLine">
            <label>Friend Name</label>
            <input
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="inputLine">
            <label>Image URL</label>
            <input
              placeholder="image Url"
              // type="file"
              // accept="image/*"
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
          <Button onClick={handleSubmit}>Add</Button>
        </StyledBox>
      </div>
    </StyledForm>
  );
}

export default NewFriendForm;
