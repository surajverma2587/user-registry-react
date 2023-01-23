import Alert from "react-bootstrap/Alert";

export const Error = () => {
  return (
    <Alert variant="info">
      You have no users in the registry. Please complete the add form to create
      a new user.
    </Alert>
  );
};
