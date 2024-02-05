import styled from "styled-components";
import Button from "../ui/Button";
import { motion } from "framer-motion";

const StyledLogin = styled.div`
  flex: 0.55;
  display: flex;
  align-items: center;

  justify-content: start;
  margin-left: 2rem;
  font-size: 1.4rem;

  @media (max-width: 400px) {
    margin: 0;
  }
`;

const StyledBox = styled.div`
  background-color: var(--color-dark-0);
  height: 400px;
  width: 400px;
  overflow: visible;
  border-radius: 20px;
  padding: 40px;

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

  h1 {
    margin-bottom: 3.5rem;
    text-align: center;
    font-size: 2.5rem;
  }

  input {
    background-color: var(--color-dark-1);
    border: none;
    margin-bottom: 2.5rem;
    border-radius: 0.5rem;
    width: 100%;
    padding: 0.8rem 1.5rem;
  }

  input[type="checkbox"],
  label {
    display: inline;
    width: fit-content;
    text-align: left;
    margin-bottom: 4.5rem;
    margin-right: 0.5rem;
  }

  input[type="checkbox"] {
    accent-color: var(--color-dark-2);
  }
`;

function Login() {
  return (
    <StyledLogin>
      <motion.div
        transition={{ duration: 0.5, type: "tween" }}
        animate={{ x: [-460, 0] }}
      >
        <StyledBox>
          <h1>Login</h1>
          <input placeholder="Username" />
          <input placeholder="Password" />
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">Remember me</label>
          <Button>Login</Button>
        </StyledBox>
      </motion.div>
    </StyledLogin>
  );
}

export default Login;
