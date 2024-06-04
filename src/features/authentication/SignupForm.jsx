import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSignup } from "./useSignup";
import Alert from "../../ui/Alert";

function SignupForm() {
  const { signup, isLoading } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ fullName, email, password }) {
    signup({ fullName, email, password }, { onSettled: () => reset() });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Alert>
        Приглашение новых пользователей было отключено в демо-версии. Однако
        форма все еще интерактивная :)
      </Alert>
      <FormRow label="Полное имя" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          {...register("fullName", { required: "Это поле обязательно" })}
        />
      </FormRow>

      <FormRow label="Email адрес" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          {...register("email", {
            required: "Это поле обязательно",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Введите корректный email",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Пароль (мин 8 символов)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          {...register("password", {
            required: "Это поле обязательно",
            minLength: { value: 8, message: "Минимум 8 символов" },
          })}
        />
      </FormRow>

      <FormRow
        label="Повторите пароль"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          id="passwordConfirm"
          {...register("passwordConfirm", {
            required: "Это поле обязательно",
            validate: (value) =>
              value === getValues().password || "Пароли не совпадают",
          })}
        />
      </FormRow>

      <FormRow>
        <Button variation="secondary" type="reset">
          Отмена
        </Button>
        <Button>Создать нового пользователя</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
