import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import styled, { css } from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";

const bgColors = {
  dark: css`
    background-color: var(--color-dark-0);
  `,
  transparent: css`
    background-color: transparent;
  `,
};

const StyledNav = styled.ul`
  display: flex;
  color: var(--color-grey-50);
  gap: 5rem;
  align-items: center;
  justify-content: space-between;
  height: 15vh;
  width: 100%;
  padding: 0 5rem;
  ${(props) => bgColors[props.bgColor]};

  .hidden {
    display: none;
  }

  @media (max-width: 700px) {
    padding: 0 2rem;

    .show {
      display: none;
    }

    .hidden {
      display: block;
    }
  }
`;

function Header({ bgColor = "transparent" }) {
  return (
    <StyledNav bgColor={bgColor}>
      <li style={{ flex: 1, textAlign: "left" }}>
        <Link to="/">
          <Logo />
        </Link>
      </li>
      <li className="show">
        <NavLink>Features</NavLink>
      </li>
      <li className="show">
        <NavLink>Pricing</NavLink>
      </li>
      <li className="show">
        <NavLink to="/login">Login</NavLink>
      </li>
      <li className="hidden">
        <NavLink>
          <AiOutlineMenu />
        </NavLink>
      </li>
    </StyledNav>
  );
}

export default Header;
