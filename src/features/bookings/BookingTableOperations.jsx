import SortBy from "../../ui/SortBy";
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function BookingTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "Все" },
          { value: "checked-out", label: "Покинули" },
          { value: "checked-in", label: "Зарегистрированы" },
          { value: "unconfirmed", label: "Не подтверждены" },
        ]}
      />

      <SortBy
        options={[
          {
            value: "startDate-desc",
            label: "Сортировка по дате (по убыванию)",
          },
          {
            value: "startDate-asc",
            label: "Сортировка по дате (по возрастанию)",
          },
          {
            value: "totalPrice-desc",
            label: "Сортировка по оплате (по убыванию)",
          },
          {
            value: "totalPrice-asc",
            label: "Сортировка по оплате (по возрастанию)",
          },
        ]}
      />
    </TableOperations>
  );
}

export default BookingTableOperations;
