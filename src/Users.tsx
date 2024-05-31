import { useQuery } from "react-query";
import { getUsers, User } from "./getUsers";
import { UsersTable } from "./UsersTable";

export const Users = () => {
  const { isLoading, data } = useQuery<User[]>(["users"], getUsers);

  console.log(isLoading);
  console.log(data);

  return (
    <>
      <div className="App">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            <UsersTable />
          </>
        )}
      </div>
    </>
  );
};
