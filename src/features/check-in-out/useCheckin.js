import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useCheckin() {
  const queryClient = useQueryClient();

  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...breakfast,
      }),
    onSuccess: (data) => {
      toast.success(`Заказ #${data.id} успешно зарегистрирован`);
      queryClient.invalidateQueries({ active: true });
    },

    onError: () => toast.error("Ошибка при регистрации"),
  });

  return { checkin, isCheckingIn };
}
