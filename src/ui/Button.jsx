import styled from "styled-components";

const StyledButton = styled.button`
  color: var(--color-grey-50);
  background-color: #ec625f;
  padding: 1.5rem;
  border-radius: 1.5rem;
  border: none;
  margin: 0.2rem;

  &:hover {
    /* color: var(--color-grey-200); */
    background-color: #d15f5c;
  }
`;

function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;
