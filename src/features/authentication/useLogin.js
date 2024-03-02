import { useMutation } from "@tanstack/react-query";
import { login } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();

  const {
    mutate: loginUser,
    isLoading: isLoggingIn,
    error,
  } = useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),
    onSuccess: () => {
      navigate("/dashboard");
    },
    onError: () => toast.error("Неверная почта или пароль"),
  });

  return {
    loginUser,
    isLoggingIn,
    error,
  };
}
