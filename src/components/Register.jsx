import styled from "styled-components";
import Button from "../ui/Button";
import { motion } from "framer-motion";

const StyledSignUp = styled.div`
  flex: 0.55;
  display: flex;
  align-items: center;
  justify-content: start;
  margin-left: 2rem;
  font-size: 1.4rem;
`;

const StyledBox = styled.div`
  background-color: var(--color-dark-0);
  height: 400px;
  width: 400px;
  overflow: visible;
  border-radius: 20px;
  padding: 40px;
  margin-left: 4rem;

  h1 {
    margin-bottom: 3rem;
    text-align: center;
    font-size: 2.5rem;
  }

  input {
    background-color: var(--color-dark-1);
    border: none;
    margin-bottom: 2.4rem;
    border-radius: 0.5rem;
    width: 100%;
    padding: 0.8rem 1.5rem;
  }
`;

function Register() {
  return (
    <StyledSignUp>
      <motion.div
        animate={{ x: [460, 0] }}
        transition={{ duration: 1, type: "spring" }}
      >
        <StyledBox>
          <h1>Register</h1>
          <input placeholder="Username" />
          <input placeholder="Password" />
          <input placeholder="Confirm Password" />
          <Button>Sign Up</Button>
        </StyledBox>
      </motion.div>
    </StyledSignUp>
  );
}

export default Register;
