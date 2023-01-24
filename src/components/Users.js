import Stack from "react-bootstrap/Stack";
import { Error } from "./Error";
import { UserCard } from "./UserCard";

export const Users = ({ users }) => {
  if (users.length === 0) {
    return <Error />;
  }

  return (
    <Stack
      direction="horizontal"
      className="justify-content-between align-items-start"
    >
      {users.map((user) => (
        <UserCard user={user} key={user.id} />
      ))}
    </Stack>
  );
};
