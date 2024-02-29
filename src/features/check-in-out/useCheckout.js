import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, { status: "checked-out" }),

    onSuccess: () => {
      toast.success("Успешно отмечен выезд");
      queryClient.invalidateQueries({ active: true });
      navigate("/bookings");
    },

    onError: () => toast.error("Ошибка при отметке выезда"),
  });

  return { checkout, isCheckingOut };
}
