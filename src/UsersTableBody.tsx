export const UsersTableBody = ({ coloumns, processedData }) => {
  return (
    <tbody>
      {processedData.map((user) => {
        return (
          <tr key={user.id}>
            {coloumns.map(({ coloumnId }) => {
              const tData = user[coloumnId] ? user[coloumnId] : "——";
              return <td key={coloumnId}>{tData}</td>;
            })}
          </tr>
        );
      })}
    </tbody>
  );
};
