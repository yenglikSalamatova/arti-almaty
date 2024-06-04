import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Alert from "../../ui/Alert";

import { useUpdateUser } from "./useUpdateUser";

function UpdatePasswordForm() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  const { updateUser, isUpdating } = useUpdateUser();

  function onSubmit({ password }) {
    updateUser({ password }, { onSuccess: reset });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Alert>Изменение пароля отключено в демо версии</Alert>
      <FormRow
        label="Пароль (мин 8 символов)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          disabled={true}
          {...register("password", {
            required: "Это поле обязательно",
            minLength: {
              value: 8,
              message: "Минимум 8 символов",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Повторите пароль"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          autoComplete="new-password"
          id="passwordConfirm"
          disabled={true}
          {...register("passwordConfirm", {
            required: "Это поле обязательно",
            validate: (value) =>
              getValues().password === value || "Пароли не совпадают",
          })}
        />
      </FormRow>
      <FormRow>
        <Button onClick={reset} type="reset" variation="secondary">
          Cancel
        </Button>
        <Button disabled={isUpdating}>Обновить пароль</Button>
      </FormRow>
    </Form>
  );
}

export default UpdatePasswordForm;
