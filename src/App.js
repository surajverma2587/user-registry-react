import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";

import { AddUserFrom } from "./components/AddUserForm";
import { ConfirmationModal } from "./components/ConfirmationModal";
import { SuccessModal } from "./components/SuccessModal";
import { Users } from "./components/Users";
import { getFromLocalStorage } from "./utils/getFromLocalStorage";

export const App = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    const usersFromLS = getFromLocalStorage("users", []);

    setUsers(usersFromLS);
  }, []);

  return (
    <Container>
      <AddUserFrom setUsers={setUsers} />
      {users && <Users users={users} />}
      <ConfirmationModal />
      <SuccessModal />
    </Container>
  );
};
