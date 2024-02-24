import styled from "styled-components";
import Divider from "./Divider";

const StyledLogo = styled.div`
  text-align: center;
  font-size: 2.4rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  height: 5rem;
  width: auto;
  margin-right: 0.8rem;
`;

function Logo() {
  return (
    <StyledLogo>
      <Image src="./logo.png" /> Arti Almaty.
    </StyledLogo>
  );
}

export default Logo;
