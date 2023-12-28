/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledButton2 = styled.button`
  color: #ec625f;
  background-color: transparent;
  border: 1px solid #ec625f;
  padding: 1.5rem 3.5rem;
  line-height: 2rem;

  &:hover {
    background-color: #ec625f;
    color: var(--color-grey-50);
  }

  @media (max-width: 700px) {
    padding: 1.5rem 2rem;
  }
`;

function Button2({ children }) {
  return <StyledButton2>{children}</StyledButton2>;
}

export default Button2;
