import styled from "styled-components";
import Button from "../ui/Button";
import { color } from "framer-motion";
import Button2 from "../ui/Button2";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const StyledHeader = styled.div`
  height: 7rem;
  background-color: var(--color-dark-0);
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
`;

const StyledUser = styled.div`
  /* border: 1px solid white; */
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  /* background: var(--color-dark-0); */
  padding: 2rem;
  float: right;
  /* border-radius: 1rem; */

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  p {
    margin-right: 2.5rem;
  }
`;

function User() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleClick() {
    logout();
    navigate("/login");
  }

  return (
    <StyledHeader>
      <StyledUser>
        <img src="/images/me.png" />
        <p>
          Welcome, <b>User</b>
        </p>
        <Button size="small" onClick={handleClick}>
          LOGOUT
        </Button>
      </StyledUser>
    </StyledHeader>
  );
}

export default User;
