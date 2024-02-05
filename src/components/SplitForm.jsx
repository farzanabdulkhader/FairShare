import styled from "styled-components";
import Button from "../ui/Button";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import "../data/friends";
import { useState } from "react";
import { useFriend } from "../FriendContext";

const StyledForm = styled.div`
  font-size: 1.4rem;
  position: relative;
  /* border: 1px solid yellow; */

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
    margin-bottom: 2rem;
  }

  h2 {
    margin-bottom: 2.5rem;
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

  input,
  input[readOnly],
  select {
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

function SplitForm() {
  const [billValue, setBillValue] = useState("");
  const [userExpense, setUserExpense] = useState("");
  const [whosPaying, setWhosPaying] = useState("user");
  const navigate = useNavigate();

  const { onBillSplit, selectedFriend, onSelectFriend } = useFriend();

  const newBalance =
    whosPaying === "user" ? billValue - userExpense : -userExpense;

  function handleSubmit() {
    onBillSplit(newBalance);
  }

  return (
    <StyledForm>
      <IoCloseCircleOutline
        onClick={() => {
          navigate("/friends");
          onSelectFriend(null);
        }}
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
          <h2>Split a bill with {selectedFriend?.name}</h2>
          <div className="inputLine">
            <label>💰 Bill Value</label>
            <input
              placeholder="$"
              value={billValue}
              onChange={(e) => setBillValue(e.target.value)}
            />
          </div>
          <div className="inputLine">
            <label>👦🏻 Your Expense</label>
            <input
              placeholder="$"
              value={userExpense}
              onChange={(e) => setUserExpense(e.target.value)}
            />
          </div>
          <div className="inputLine">
            <label>🧑🏽‍🤝‍🧑🏼 {selectedFriend?.name}&apos;s expense</label>
            <input placeholder="$" value={billValue - userExpense} readOnly />
          </div>
          <div className="inputLine">
            <label>🤑 Who is paying the bill?</label>
            <select
              placeholder="?"
              value={whosPaying}
              onChange={(e) => setWhosPaying(e.target.value)}
            >
              <option value="user">Me</option>
              <option value="friend">{selectedFriend?.name}</option>
            </select>
          </div>
          <div style={{ marginTop: "4rem" }}>
            <Button onClick={handleSubmit}>Split Bill</Button>
          </div>
        </StyledBox>
      </div>
    </StyledForm>
  );
}

export default SplitForm;
