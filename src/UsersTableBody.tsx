export const UsersTableBody = ({ columns, sortedData }) => {
  return (
    <tbody>
      {sortedData.map((user) => {
        return (
          <tr key={user.id}>
            {columns.map(({ accessor }) => {
              const tData = user[accessor] ? user[accessor] : "——";
              return <td key={accessor}>{tData}</td>;
            })}
          </tr>
        );
      })}
    </tbody>
  );
};
