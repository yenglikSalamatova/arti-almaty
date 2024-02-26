import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField={"discount"}
        options={[
          { value: "all", label: "Все" },
          { value: "no-discount", label: "Без скидки" },
          { value: "with-discount", label: "Со скидкой" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Сортировка по названию (A-Z)" },
          { value: "name-desc", label: "Сортировка по названию (Z-A)" },
          {
            value: "regularPrice-asc",
            label: "Сортировка по цене (по возрастанию)",
          },
          {
            value: "regularPrice-desc",
            label: "Сортировка по цене (по убыванию)",
          },
          {
            value: "maxCapacity-asc",
            label: "Сортировка по максимальной вместимости (по возрастанию)",
          },
          {
            value: "maxCapacity-desc",
            label: "Сортировка по максимальной вместимости (по убыванию)",
          },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
