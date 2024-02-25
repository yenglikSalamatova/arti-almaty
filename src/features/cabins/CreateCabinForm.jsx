import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import FormRow from "../../ui/FormRow";

function CreateCabinForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;
  console.log(errors);
  const queryClient = useQueryClient();

  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success("Домик добавлен");
      queryClient.invalidateQueries({
        queryKey: ["cabin"],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    mutate(data);
  }

  function onError(errors) {
    // console.log(errors);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Название" error={errors.name?.message}>
        <Input
          type="text"
          id="name"
          {...register("name", { required: "Название обязательно" })}
          disabled={isCreating}
        />
      </FormRow>

      <FormRow label="Макс. вместимость" error={errors.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isCreating}
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
          disabled={isCreating}
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
          disabled={isCreating}
          {...register("discount", {
            required: "Скидка обязательна",
            validate: (value) =>
              value <= getValues().regularPrice ||
              "Скидка не может быть больше стоимости",
          })}
        />
      </FormRow>

      <FormRow label="Описание" error={errors.description?.message}>
        <Textarea
          type="number"
          disabled={isCreating}
          id="description"
          defaultValue=""
          {...register("description", { required: "Описание обязательно" })}
        />
      </FormRow>

      <FormRow label="Изображение">
        <FileInput
          id="image"
          accept="image/*"
          {...register("image")}
          disabled={isCreating}
        />
      </FormRow>

      <FormRow>
        <Button variation="secondary" type="reset">
          Отмена
        </Button>
        <Button disabled={isCreating}>Сохранить</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
