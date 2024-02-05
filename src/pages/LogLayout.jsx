import { NavLink, Outlet } from "react-router-dom";
import styled, { css } from "styled-components";
import Header from "../ui/Header";
import { useState } from "react";
import Button2 from "../ui/Button2";
import { StyleSheetManager } from "styled-components";

const StyledSection = styled.div`
  background-image: linear-gradient(
      to right,
      rgba(10, 0, 0, 0.6),
      rgba(10, 0, 0, 0.6)
    ),
    url("images/pic12.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  min-height: 100dvh;
  height: 100%;
  width: 100dvw;

  @media (min-width: 1000px) {
    height: 100dvh;
  }

  @media (max-width: 800px) {
    justify-content: space-between;
  }
`;

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 85dvh;
  width: 100dvw;
  padding: 0 100px;
  /* border: 2px dotted pink; */

  @media (max-width: 1080px) {
    /* border: 2px dotted purple; */
    padding: 0 50px;
  }

  @media (max-width: 800px) {
    display: block;
    height: max-content;
  }

  @media (max-width: 400px) {
    padding: 4px;
  }
`;

const StyledContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.15);
  height: 280px;
  width: 100%;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  @media (max-width: 1080px) {
    /* border: 2px dotted yellow; */
    width: 100%;
  }

  @media (max-width: 800px) {
    background-color: transparent;
    /* border: 2px dotted green; */
    flex-direction: column-reverse;
    height: unset;
    padding: 100px 0;
    gap: 30px;
  }

  @media (max-width: 400px) {
    padding: 20px;
    /* width: 100px; */
    height: fit-content;
    flex-direction: column;
  }

  ${(props) =>
    props.isRegistered ||
    css`
      flex-direction: row-reverse;
    `}
`;

const StyledLeft = styled.div`
  flex: 0.45;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
  gap: 10px;

  @media (max-width: 800px) {
    padding: 4px 30px;
  }

  ${(props) =>
    props.isRegistered ||
    css`
      align-items: flex-end;
      text-align: right;
      padding-right: 10rem;
    `}

  p {
    margin-bottom: 1.5rem;
  }
`;

function LogLayout() {
  const [isRegistered, setIsRegistered] = useState(true);

  function handleClick() {
    setIsRegistered((isRegistered) => !isRegistered);
  }

  return (
    <>
      <StyleSheetManager shouldForwardProp={(prop) => prop !== "isRegistered"}>
        <StyledSection>
          <Header isRegistered={isRegistered} />
          <StyledMain>
            <StyledContainer isRegistered={isRegistered}>
              <StyledLeft isRegistered={isRegistered}>
                <h3>
                  {isRegistered
                    ? "Don't have an account?"
                    : "Have an account Already?"}
                </h3>
                <p>
                  {isRegistered
                    ? "Friends don't let friends pay for all, let's Split the bill and avoid the fall."
                    : "Login to start sharing the cost and creating lasting bonds"}
                </p>
                <NavLink to={isRegistered ? "/register" : "/login"}>
                  <Button2 onClick={handleClick}>
                    {isRegistered ? "Sign Up" : "Login"}
                  </Button2>
                </NavLink>
              </StyledLeft>
              <Outlet />
            </StyledContainer>
          </StyledMain>
        </StyledSection>{" "}
      </StyleSheetManager>
    </>
  );
}

export default LogLayout;
