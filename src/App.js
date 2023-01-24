import Container from "react-bootstrap/Container";

import { AddUserFrom } from "./components/AddUserForm";
import { ConfirmationModal } from "./components/ConfirmationModal";
import { Error } from "./components/Error";
import { SuccessModal } from "./components/SuccessModal";
import { UserCard } from "./components/UserCard";
import { Users } from "./components/Users";

export const App = () => {
  return (
    <Container>
      <AddUserFrom />
      <Error />
      <Users>
        <UserCard />
        <UserCard />
        <UserCard />
      </Users>
      <ConfirmationModal />
      <SuccessModal />
    </Container>
  );
};
