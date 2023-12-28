import styled from "styled-components";
import Header from "../ui/Header";
import { BiLogoPlayStore } from "react-icons/bi";
import { GrAppleAppStore } from "react-icons/gr";
import { BsCloudDownload } from "react-icons/bs";
import Button2 from "../ui/Button2";
import { Link } from "react-router-dom";

const StyledSection = styled.section`
  width: 100vw;
  height: 85vh;
  padding: 0 10rem;
  background-color: var(--color-dark-0);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 700px) {
    flex-direction: column-reverse;
    /* height: fit-content; */
    padding: 4rem;
    overflow-x: hidden;
    text-align: center;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 200;
    margin-bottom: 2rem;
  }

  div {
    flex: 1;
    /* border: 2px dotted pink; */
  }

  span {
    margin-right: 1rem;
    margin-top: -2rem;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  margin-bottom: 2rem;
  margin-top: 4rem;

  @media (max-width: 700px) {
    justify-content: center;
  }
`;

function HomePage() {
  return (
    <div>
      <Header />
      <StyledSection>
        <div>
          <h1>Simplify, Split, Settle – The Fairest Way to Share Expenses!</h1>
          <Icons>
            <Link>
              <GrAppleAppStore style={{ color: "#fff", fontSize: "3rem" }} />
            </Link>
            <Link>
              <BiLogoPlayStore style={{ color: "#ec625f", fontSize: "3rem" }} />
            </Link>
          </Icons>
          <Button2>
            <span>Download the App Now</span>
            <BsCloudDownload />
          </Button2>
        </div>
        <div>
          <img
            src="/images/undraw_coffee_with_friends.svg"
            // src="/images/undraw_special_event.svg"
          />
        </div>
      </StyledSection>
    </div>
  );
}

export default HomePage;
