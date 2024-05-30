import { useState } from "react";

export const UsersTableHeaders = ({ coloumns, processTableData }) => {
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");
  const handleTableDataChange = (coloumnId) => {
    console.log(coloumnId);
    const sortOrder =
      coloumnId === sortField && order === "asc" ? "desc" : "asc";
    setSortField(coloumnId);
    setOrder(sortOrder);
    processTableData(coloumnId, sortOrder);
  };

  return (
    <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
      <tr>
        {coloumns.map(({ label, coloumnId }) => {
          return (
            <th
              key={coloumnId}
              onClick={() => handleTableDataChange(coloumnId)}
            >
              {label}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
