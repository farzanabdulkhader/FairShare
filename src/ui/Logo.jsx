// import { icons } from "react-icons";
import { FaGlassCheers } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled.div`
  display: inline-block;
  color: var(--color-grey-50);
  font-size: 1.75rem;
  font-weight: 300;
  margin: auto;
`;

const style = {
  fontSize: "3rem",
  color: "#EC625F",
  marginRight: "1rem",
  marginBottom: "-0.8rem",
};

function Logo() {
  return (
    <StyledLogo>
      <FaGlassCheers style={style} />
      <span>FairShare</span>
    </StyledLogo>
  );
}

export default Logo;
