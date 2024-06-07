import { HiOutlineBriefcase, HiOutlineChartBar } from "react-icons/hi";
import Stat from "./Stat";
import { HiOutlineBanknotes, HiOutlineCalendarDays } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  // 1.
  const numBookings = bookings.length;

  //2.
  const sales = bookings.reduce((acc, booking) => {
    return acc + booking.totalPrice;
  }, 0);

  //2.
  const checkins = confirmedStays.length;

  //4.
  const occupation =
    confirmedStays.reduce((acc, stay) => {
      return acc + stay.numNights;
    }, 0) /
    (numDays * cabinCount);

  return (
    <>
      <Stat
        title="Заказы"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Продажи"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Зарегистрированы"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />
      <Stat
        title="Заполняемость"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100) + "%"}
      />
    </>
  );
}

export default Stats;
