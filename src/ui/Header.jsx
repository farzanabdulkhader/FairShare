import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";

const StyledNav = styled.ul`
  display: flex;
  color: var(--color-grey-50);
  gap: 5rem;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-dark-0);
  height: 15vh;
  padding: 0 5rem;

  .hidden {
    display: none;
  }

  @media (max-width: 700px) {
    .show {
      display: none;
    }

    .hidden {
      display: block;
    }
  }
`;

function Header() {
  return (
    <StyledNav>
      <li style={{ flex: 1 }}>
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
        <NavLink to="/sign-in">Login</NavLink>
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
