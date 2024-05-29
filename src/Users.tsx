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
            <h1>Users</h1>
            <UsersTable />
            <h2>end of table</h2>
            <table border={1}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </>
  );
};
