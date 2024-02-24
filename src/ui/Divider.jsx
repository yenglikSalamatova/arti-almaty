import styled, { css } from "styled-components";

const Divider = styled.div`
  ${(props) =>
    props.type === "horizontal" &&
    css`
      width: 100%;
      height: 2px;
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      width: 2px;
      height: 100%;
    `}
  background-color: var(--color-grey-200);
`;

Divider.defaultProps = {
  type: "horizontal",
};

export default Divider;
