import styled, { css } from "styled-components";

const variations = {
  success: css`
    background-color: var(--color-green-100);
  `,
  info: css`
    background-color: var(--color-yellow-100);
  `,
};

const Alert = styled.div`
  padding: 1.2rem 1.6rem;
  border-radius: var(--border-radius-sm);
  ${(props) => variations[props.$variation]}
`;

Alert.defaultProps = {
  $variation: "info",
};

export default Alert;
