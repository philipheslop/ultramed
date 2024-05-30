import { useQuery } from "react-query";
import { createContext, useState } from "react";
import { getUsers, User } from "./getUsers";
import { UsersTable } from "./UsersTable";

export const CurrentUserContext = createContext(null);

export const Users = () => {
  const { isLoading, data } = useQuery<User[]>(["users"], getUsers);
  const [currentUser, setCurrentUser] = useState(null);

  console.log(isLoading);
  console.log(data);
  console.log(currentUser);

  return (
    <>
      <div className="App">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            {currentUser === null ? (
              <div>No User Selected</div>
            ) : (
              <div>
                <h2>Current User</h2>
                Name: {currentUser.name}
                Email: {currentUser.email}
                Status: {currentUser.status}
              </div>
            )}
            <CurrentUserContext.Provider value={setCurrentUser}>
              <UsersTable />
            </CurrentUserContext.Provider>
          </>
        )}
      </div>
    </>
  );
};
