import styled from "styled-components";
import Button from "../ui/Button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

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
  const [username, setUsername] = useState("farzana@gmail.com");
  const [password, setPassword] = useState("farzana");
  const { login, isAuthenticated } = useAuth();

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(username, password);
    if (username && password) login(username, password);
  }

  useEffect(() => {
    if (isAuthenticated) navigate("/friends");
  }, [isAuthenticated, navigate]);

  return (
    <StyledLogin>
      <motion.div
        transition={{ duration: 0.5, type: "tween" }}
        animate={{ x: [-460, 0] }}
      >
        <StyledBox>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Username"
              defaultValue="farzana@gmail.com"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              defaultValue="farzana"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="checkbox"
              id="checkbox"
              // onChange={(e) => setIsRemember(e.target.value)}
            />
            <label htmlFor="checkbox">Remember me</label>
            <Button type="submit">Login</Button>
          </form>
        </StyledBox>
      </motion.div>
    </StyledLogin>
  );
}

export default Login;
