import { useQuery } from "react-query";
import { useState, useMemo } from "react";
import { getUsers, User } from "./getUsers";
import { UsersTableBody } from "./UsersTableBody";
import { UsersTableHeaders } from "./UsersTableHeaders";

export const UsersTable = () => {
  const coloumns = [
    { label: "Full Name", coloumnId: "name" },
    { label: "Email", coloumnId: "email" },
    { label: "Current Status", coloumnId: "status" },
  ];

  const { isLoading, data } = useQuery<User[]>(["users"], getUsers);
  //const [tableData, setTableData] = useState(data);

  //Save Queries for derived state
  const [filter, setFilter] = useState("");
  const [sortField, setSortField] = useState(coloumns[0].coloumnId);
  const [sortOrder, setSortOrder] = useState("asc");

  const tableData = useMemo(() => {
    if (sortField) {
      const sorted = [...data].sort((a, b) => {
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      console.log("td2");
      console.log(sorted);
      return sorted?.filter((person) =>
        person.name.toLowerCase().includes(filter.toLowerCase()),
      );
    }
  }, [filter, sortField, sortOrder]);

  const setSortQuery = (sortField, sortOrder) => {
    setSortField(sortField);
    setSortOrder(sortOrder);
  };

  const setFilterQuery = (filter) => {
    setFilter(filter);
  };

  return (
    <>
      <h2>Users - Type to filter the list:</h2>
      <input
        id="filter"
        name="filter"
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={filter}
        onChange={(event) => setFilterQuery(event.target.value)}
      />
      <table className="table min-w-full text-left text-sm font-light text-surface dark:text-white">
        <UsersTableHeaders
          coloumns={coloumns}
          processTableData={setSortQuery}
        />
        <UsersTableBody coloumns={coloumns} processedData={tableData} />
      </table>
    </>
  );
};
