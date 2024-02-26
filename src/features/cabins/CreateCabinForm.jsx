import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";

function CreateCabinForm({ cabinToEdit = {}, onCloseModal }) {
  const { id: editId, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editId);
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;
  console.log(errors);

  const { isCreating, createCabin } = useCreateCabin();
  const { isEditing, editCabin } = useEditCabin();

  const isWorking = isCreating || isEditing;

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    // console.log(data);
    if (isEditSession)
      editCabin(
        { newCabinData: { ...data, image }, id: editId },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal();
          },
        }
      );
    else
      createCabin(
        { ...data, image },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal();
          },
        }
      );
  }

  function onError(errors) {
    // console.log(errors);
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="Название" error={errors.name?.message}>
        <Input
          type="text"
          id="name"
          {...register("name", { required: "Название обязательно" })}
          disabled={isWorking}
        />
      </FormRow>

      <FormRow label="Макс. вместимость" error={errors.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isWorking}
          {...register("maxCapacity", {
            required: "Максимальная вместимость обязательна",
            min: {
              value: 1,
              message: "Максимальная вместимость должна быть больше 0",
            },
          })}
        />
      </FormRow>

      <FormRow label="Стоимость" error={errors.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isWorking}
          {...register("regularPrice", {
            required: "Стоимость обязательна",
            min: {
              value: 1,
              message: "Стоимость должна быть больше 0",
            },
          })}
        />
      </FormRow>

      <FormRow label="Скидка" error={errors.discount?.message}>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          disabled={isWorking}
          {...register("discount", {
            required: "Скидка обязательна",
            validate: (value) =>
              parseFloat(value) <= parseFloat(getValues().regularPrice) ||
              "Скидка не может быть больше стоимости",
          })}
        />
      </FormRow>

      <FormRow label="Описание" error={errors.description?.message}>
        <Textarea
          type="number"
          disabled={isWorking}
          id="description"
          defaultValue=""
          {...register("description", { required: "Описание обязательно" })}
        />
      </FormRow>

      <FormRow label="Изображение">
        <FileInput
          id="image"
          accept="image/*"
          type="file"
          {...register("image")}
          disabled={isWorking}
          {...register("image", {
            required: isEditSession ? false : "Изображение обязательно",
          })}
        />
      </FormRow>

      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Отмена
        </Button>
        <Button disabled={isWorking}>Сохранить</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
