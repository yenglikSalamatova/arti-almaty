import Heading from "../ui/Heading";
import SignupForm from "../features/authentication/SignupForm";

function NewUsers() {
  return (
    <>
      <Heading as="h1">Создание нового пользователя</Heading>
      <SignupForm />
    </>
  );
}

export default NewUsers;
