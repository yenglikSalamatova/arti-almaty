import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    mutate: loginUser,
    isLoading: isLoggingIn,
    error,
  } = useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),
    onSuccess: (user) => {
      console.log(user);
      queryClient.setQueryData(["user"], { ...user.user });
      navigate("/dashboard", { replace: true });
    },
    onError: () => toast.error("Неверная почта или пароль"),
  });

  return {
    loginUser,
    isLoggingIn,
    error,
  };
}
