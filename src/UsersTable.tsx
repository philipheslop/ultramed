import { useQuery } from "react-query";
import { useState } from "react";
import { getUsers, User } from "./getUsers";
import { UsersTableBody } from "./UsersTableBody";
import { UsersTableHeaders } from "./UsersTableHeaders";

export const UsersTable = () => {
  const columns = [
    { label: "Full Name", accessor: "name" },
    { label: "Email", accessor: "email" },
    { label: "Current Status", accessor: "status" },
  ];

  const { isLoading, data } = useQuery<User[]>(["users"], getUsers);
  const [tableData, setTableData] = useState(data);

  const handleSort = (sortField, sortOrder) => {
    console.log(sortField, sortOrder);
    if (sortField) {
      const sorted = [...data].sort((a, b) => {
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });

      console.log(sorted);
      setTableData(sorted);
    }
  };

  return (
    <>
      <h2>Users Table Component</h2>
      <table className="table">
        <caption>Users</caption>
        <UsersTableHeaders columns={columns} handleSort={handleSort} />
        <UsersTableBody columns={columns} sortedData={tableData} />
      </table>
    </>
  );
};
