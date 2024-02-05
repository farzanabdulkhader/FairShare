/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";

const sizes = {
  small: css`
    padding: 0.5rem 1rem;
  `,
};

const StyledButton2 = styled.button`
  color: #ec625f;
  background-color: transparent;
  border: 1.5px solid #ec625f;
  padding: 1.2rem 4rem;
  line-height: 2rem;

  ${(props) => sizes[props.size]}

  &:hover, &:active {
    background-color: #ec625f;
    color: var(--color-grey-50);
  }

  @media (max-width: 700px) {
    padding: 1.5rem 2rem;
  }
`;

function Button2({ children, onClick, size, disabled }) {
  return (
    <StyledButton2 size={size} onClick={onClick}>
      {children}
    </StyledButton2>
  );
}

export default Button2;
