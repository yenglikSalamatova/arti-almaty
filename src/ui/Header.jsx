import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 2rem 4rem;
  color: var(--color-grey-900);
  font-size: 1.8rem;
  font-weight: 500;
`;

function Header() {
  return <StyledHeader>Header</StyledHeader>;
}

export default Header;
