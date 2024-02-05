import { Outlet } from "react-router-dom";
import styled from "styled-components";
import FriendList from "../components/FriendList";
import User from "../components/User";
import { FriendProvider } from "../FriendContext";

const StyledSection = styled.div`
  /* border: 1px solid red; */
  min-height: 100dvh;
  height: 100%;
  width: 100dvw;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.8)
    ),
    url("../public/images/pic2.jpg");
  background-position: 0 -90px;
  background-size: cover;
`;

const StyledContainer = styled.div`
  height: 100dvh;
  display: flex;
  align-items: stretch;
  justify-content: space-between;

  /* width */
  ::-webkit-scrollbar {
    width: 0.6rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--color-dark-1);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--color-dark-2);
    border-radius: 1rem;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
  }
`;

const StyledLeft = styled.div`
  background-color: rgba(80, 80, 80, 0.8);
  height: 100%;
  overflow-y: scroll;
  flex: 30%;
  /* border: 2px dotted green; */
  border-right: 1.5px solid var(--color-dark-1);
`;

const StyledRight = styled.div`
  height: 100%;
  flex: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid yellow; */
  position: relative;
  background: transparent;
  border-left: 1px solid var(--color-dark-1);
`;

function AppLayout() {
  return (
    <FriendProvider>
      <StyledSection>
        <main>
          <StyledContainer>
            <StyledLeft>
              <FriendList />
            </StyledLeft>
            <StyledRight>
              <User />
              {<Outlet />}
            </StyledRight>
          </StyledContainer>
        </main>
      </StyledSection>
    </FriendProvider>
  );
}
export default AppLayout;
