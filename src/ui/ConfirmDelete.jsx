import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";

const StyledConfirmDelete = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function ConfirmDelete({ resource, onConfirm, disabled, onCloseModal }) {
  return (
    <StyledConfirmDelete>
      <Heading type="h3">Удалить {resource}</Heading>
      <p>Вы верны, что хотите удалить {resource}? Это действие необратимо.</p>

      <div>
        <Button variation="secondary" onClick={onCloseModal}>
          Отмена
        </Button>
        <Button variation="danger" onClick={onConfirm} disabled={disabled}>
          Удалить
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
