import styled from "styled-components";

const StyledButton = styled.button`
  color: var(--color-grey-50);
  background-color: #ec625f;
  padding: 1.2rem 2rem;
  border-radius: 0.5rem;
  border: none;
  width: 100%;
  margin: 0.5rem;

  &:hover {
    background-color: #bc4e4c;
  }
`;

function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;
