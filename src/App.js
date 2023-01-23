import { AddUserFrom } from "./components/AddUserForm";
import { ConfirmationModal } from "./components/ConfirmationModal";
import { Error } from "./components/Error";
import { SuccessModal } from "./components/SuccessModal";
import { UserCard } from "./components/UserCard";
import { Users } from "./components/Users";

export const App = () => {
  return (
    <div>
      <AddUserFrom />
      <Error />
      <Users>
        <UserCard />
        <UserCard />
        <UserCard />
      </Users>
      <ConfirmationModal />
      <SuccessModal />
    </div>
  );
};
