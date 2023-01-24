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
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [currentUserId, setCurrentUserId] = useState();

  useEffect(() => {
    const usersFromLS = getFromLocalStorage("users", []);

    setUsers(usersFromLS);
  }, []);

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);
  };

  const handleConfirmationModalClose = () => {
    setShowConfirmationModal(false);
  };

  const handleConfirmDelete = () => {
    const usersFromLS = getFromLocalStorage("users", []);

    const newUsers = usersFromLS.filter((userFromLS) => {
      return userFromLS.id !== currentUserId;
    });

    localStorage.setItem("users", JSON.stringify(newUsers));

    setUsers(newUsers);
    setCurrentUserId();

    handleConfirmationModalClose();
  };

  const handleDelete = (userId) => {
    setCurrentUserId(userId);
    setShowConfirmationModal(true);
  };

  return (
    <Container>
      <AddUserFrom
        setUsers={setUsers}
        setShowSuccessModal={setShowSuccessModal}
      />
      {users && <Users users={users} handleDelete={handleDelete} />}
      <ConfirmationModal
        showConfirmationModal={showConfirmationModal}
        handleConfirmationModalClose={handleConfirmationModalClose}
        handleConfirmDelete={handleConfirmDelete}
      />
      <SuccessModal
        showSuccessModal={showSuccessModal}
        handleSuccessModalClose={handleSuccessModalClose}
      />
    </Container>
  );
};
