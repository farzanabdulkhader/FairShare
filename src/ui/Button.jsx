import styled, { css } from "styled-components";

const sizes = {
  small: css`
    width: unset;
    padding: 0.8rem 1.5rem;
    font-size: 1.2rem;
  `,
  large: css`
    padding: 1rem;
    padding: 1.2rem 2rem;
    width: 100%;
  `,
};

const variations = {
  primary: css``,
  secondary: css`
    color: #ec625f;
    background-color: transparent;
    border: 1.5px solid #ec625f;
    padding: 1.2rem 4rem;
    line-height: 2rem;

    &:hover {
      background-color: #ec625f;
      color: var(--color-grey-50);
    }

    @media (max-width: 700px) {
      padding: 1.5rem 2rem;
    }
  `,
  round: css`
    font-size: 2rem;
    border-radius: 50%;
    height: 4rem;
    width: 4rem;
  `,
};

const Button = styled.button`
  color: var(--color-grey-50);
  background-color: #ec625f;
  border-radius: 0.5rem;
  border: none;

  &:hover {
    background-color: #bc4e4c;
  }

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  size: "large",
  $variation: "primary",
};

export default Button;
