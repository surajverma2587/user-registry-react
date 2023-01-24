import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const SuccessModal = ({ showSuccessModal, handleSuccessModalClose }) => {
  return (
    <Modal show={showSuccessModal} onHide={handleSuccessModalClose}>
      <Modal.Header closeButton>
        <Modal.Title>Success</Modal.Title>
      </Modal.Header>
      <Modal.Body>User has been successfully added to the registry</Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={handleSuccessModalClose}>
          Ok
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
