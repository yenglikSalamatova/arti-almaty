import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRow from "../../ui/FormRow";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";

function LoginForm() {
  const [email, setEmail] = useState("micobob698@jzexport.com");
  const [password, setPassword] = useState("12345678");

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
      <p>В демо-версии используются готовые данные</p>
      <FormRow label="Почта" vertical="true">
        <Input
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={true}
        />
      </FormRow>
      <FormRow label="Пароль" vertical="true">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={true}
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
