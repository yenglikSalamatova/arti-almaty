import Spinner from "../../ui/Spinner";

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSettings } from "./useSettings";
import { useEditSetting } from "./useEditSettings";

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestsPerBooking,
      breakfastPrice,
    } = {},
  } = useSettings();
  const { isEditing, editSetting } = useEditSetting();

  if (isLoading) {
    return <Spinner />;
  }

  function handleUpdate(e, field) {
    const value = e.target.value;
    if (!value) return;
    editSetting({ [field]: value });
  }

  return (
    <Form>
      <FormRow label="Минимальное значение ночей">
        <Input
          type="number"
          id="min-nights"
          defaultValue={minBookingLength}
          onBlur={(e) => handleUpdate(e, "minBookingLength")}
          disabled={isEditing}
        />
      </FormRow>

      <FormRow label="Максимальное значение ночей">
        <Input
          type="number"
          id="max-nights"
          defaultValue={maxBookingLength}
          onBlur={(e) => handleUpdate(e, "maxBookingLength")}
          disabled={isEditing}
        />
      </FormRow>

      <FormRow label="Максимальное количество гостей">
        <Input
          type="number"
          id="max-guests"
          defaultValue={maxGuestsPerBooking}
          onBlur={(e) => handleUpdate(e, "maxGuestsPerBooking")}
          disabled={isEditing}
        />
      </FormRow>

      <FormRow label="Цена завтрака">
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={breakfastPrice}
          onBlur={(e) => handleUpdate(e, "breakfastPrice")}
          disabled={isEditing}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
