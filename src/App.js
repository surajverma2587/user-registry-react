import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";

import { AddUserFrom } from "./components/AddUserForm";
import { ConfirmationModal } from "./components/ConfirmationModal";
import { SuccessModal } from "./components/SuccessModal";
import { Users } from "./components/Users";
import { getFromLocalStorage } from "./utils/getFromLocalStorage";

export const App = () => {
  const [users, setUsers] = useState();
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    const usersFromLS = getFromLocalStorage("users", []);

    setUsers(usersFromLS);
  }, []);

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);
  };

  return (
    <Container>
      <AddUserFrom
        setUsers={setUsers}
        setShowSuccessModal={setShowSuccessModal}
      />
      {users && <Users users={users} />}
      <ConfirmationModal />
      <SuccessModal
        showSuccessModal={showSuccessModal}
        handleSuccessModalClose={handleSuccessModalClose}
      />
    </Container>
  );
};
