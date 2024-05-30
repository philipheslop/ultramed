export const UsersTableBody = ({ coloumns, processedData }) => {
  return (
    <tbody>
      {processedData.map((user) => {
        return (
          <tr
            key={user.id}
            className="border-b border-neutral-200 dark:border-white/10"
          >
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
