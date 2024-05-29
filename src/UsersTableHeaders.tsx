import { useState } from "react";

export const UsersTableHeaders = ({ columns, handleSort }) => {
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");
  const handleSortChange = (accessor) => {
    console.log(accessor);
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSort(accessor, sortOrder);
  };

  return (
    <thead>
      <tr>
        {columns.map(({ label, accessor }) => {
          return (
            <th key={accessor} onClick={() => handleSortChange(accessor)}>
              {label}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
