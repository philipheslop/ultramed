import { useContext } from "react";
import { CurrentUserContext } from "./UsersTable";

export const UsersTableBody = ({ coloumns, processedData }) => {
  const setCurrentUser = useContext(CurrentUserContext);

  return (
    <tbody>
      {processedData.map((user) => {
        return (
          <tr
            key={user.id}
            className="table-item border-b border-neutral-200 dark:border-white/10"
            onClick={() => setCurrentUser(user)}
          >
            {coloumns.map(({ coloumnId }) => {
              const tData = user[coloumnId] ? user[coloumnId] : "n/a";
              return <td key={coloumnId}>{tData}</td>;
            })}
          </tr>
        );
      })}
    </tbody>
  );
};
