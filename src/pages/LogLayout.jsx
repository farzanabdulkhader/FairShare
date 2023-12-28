import { Outlet } from "react-router-dom";
import Header from "../ui/Header";
import SignIn from "../components/SignIn";
import styled from "styled-components";
import Logo from "../ui/Logo";

const StyledSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100vh;

  div {
    flex: 1;
  }

  span {
    position: absolute;
    z-index: 50;
    top: 2rem;
    left: 2rem;
  }
`;

function LogLayout() {
  return (
    <StyledSection>
      {/* <Header /> */}
      <div>
        <span>
          <Logo />
        </span>
        <img src="/images/girls-red-black.jpg" />
      </div>
      <div>
        <Outlet />
      </div>
    </StyledSection>
  );
}

export default LogLayout;
