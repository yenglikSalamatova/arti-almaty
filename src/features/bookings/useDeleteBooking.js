import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const {
    mutate: deleteBooking,
    isLoading: isDeleting,
    error,
  } = useMutation({
    mutationFn: (bookingId) => deleteBookingApi(bookingId),
    onSuccess: () => {
      toast.success(`Заказ успешно удален`);
      queryClient.invalidateQueries({ active: true });
    },
    onError: () => toast.error("Не смогли удалить заказ"),
  });

  return { deleteBooking, isDeleting, error };
}
