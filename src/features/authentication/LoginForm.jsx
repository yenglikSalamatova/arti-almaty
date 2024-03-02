import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRow from "../../ui/FormRow";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loginUser, isLoggingIn } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    loginUser({ email, password });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Почта" vertical={true}>
        <Input
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoggingIn}
        />
      </FormRow>
      <FormRow label="Пароль" vertical={true}>
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoggingIn}
        />
      </FormRow>
      <FormRow>
        <Button size="large" disabled={isLoggingIn}>
          {!isLoggingIn ? "Войти" : <SpinnerMini />}
        </Button>
      </FormRow>
    </Form>
  );
}

export default LoginForm;
