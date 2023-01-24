import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const ConfirmationModal = ({
  showConfirmationModal,
  handleConfirmationModalClose,
  handleConfirmDelete,
}) => {
  return (
    <Modal show={showConfirmationModal} onHide={handleConfirmationModalClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to remove the user from the registry?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleConfirmationModalClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleConfirmDelete}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
