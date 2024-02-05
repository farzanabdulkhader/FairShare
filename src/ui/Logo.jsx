// import { icons } from "react-icons";
import { FaGlassCheers } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
const sizes = {
  small: css`
    font-size: 1.5rem;
  `,
};

const StyledLogo = styled.div`
  display: inline-block;
  color: var(--color-grey-50);
  font-size: 1.75rem;
  font-weight: 300;
  /* margin: auto; */
  /* border: 1px solid red; */

  ${(props) => sizes[props.size]}
`;

const style = {
  fontSize: "3rem",
  color: "#EC625F",
  marginRight: "1rem",
  marginBottom: "-0.8rem",
};
const styleSmall = {
  fontSize: "2.5rem",
  color: "#EC625F",
  marginRight: "1rem",
  marginBottom: "-0.8rem",
};

function Logo({ size }) {
  return (
    <StyledLogo size={size}>
      <FaGlassCheers style={size ? styleSmall : style} />
      <span>FairShare</span>
    </StyledLogo>
  );
}

export default Logo;
