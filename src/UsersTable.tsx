import { useQuery } from "react-query";
import { useState, useMemo, createContext } from "react";
import { getUsers, User } from "./getUsers";
import { UsersTableBody } from "./UsersTableBody";
import { UsersTableHeaders } from "./UsersTableHeaders";
import { DataVis } from "./DataVis";
import { UserAddModal } from "./UserAddModal";

export const CurrentUserContext = createContext(null);

export const UsersTable = () => {
  const coloumns = [
    { label: "Full Name", coloumnId: "name" },
    { label: "Email", coloumnId: "email" },
    { label: "Current Status", coloumnId: "status" },
  ];

  const { isLoading, data } = useQuery<User[]>(["users"], getUsers);
  const [currentUser, setCurrentUser] = useState(null);
  //const [tableData, setTableData] = useState(data);

  //Save Queries & data changes for derived state
  const [filter, setFilter] = useState("");
  const [sortField, setSortField] = useState(coloumns[0].coloumnId);
  const [sortOrder, setSortOrder] = useState("asc");

  //Lists used to store changes to data
  //these should be replaced with API calls
  //(but this also allows batching)
  const [newUsers, setNewUsers] = useState([]);
  const [removedUsers, setRemovedUsers] = useState([]);

  const tableData = useMemo(() => {
    if (sortField) {
      const sorted = [
        ...data
          .filter((user) => removedUsers.indexOf(user) < 0)
          .concat(newUsers),
      ].sort((a, b) => {
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      return sorted?.filter((person) =>
        person.name.toLowerCase().includes(filter.toLowerCase()),
      );
    }
  }, [filter, sortField, sortOrder, newUsers, removedUsers]);

  const setSortQuery = (sortField, sortOrder) => {
    setSortField(sortField);
    setSortOrder(sortOrder);
  };

  const setFilterQuery = (filter) => {
    setFilter(filter);
  };

  const addUser = (user: User) => {
    setNewUsers([...newUsers, user]);
  };

  const removeCurrentUser = () => {
    setRemovedUsers([...removedUsers, currentUser]);
    setCurrentUser(null);
  };

  return (
    <>
      <div className="container">
        <div>
          <div className="text-center text-lg font-bold">Current User</div>
          {currentUser === null ? (
            <div className="text-xs text-center w-128 bg-blue-100 shadow rounded">
              ...No User Selected...
            </div>
          ) : (
            <div className="w-128 bg-blue-100 shadow rounded">
              <span className="font-bold">Name:</span> {currentUser.name} <br />
              <span className="font-bold">Email:</span> {currentUser.email}{" "}
              <br />
              <span className="font-bold">Status:</span> {currentUser.status}{" "}
              <br />
              <button
                className="w-full text-xs bg-gray-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                type="button"
                onClick={() => removeCurrentUser()}
              >
                Remove User
              </button>
            </div>
          )}
          <br />
          <UserAddModal addUser={addUser} />
          <DataVis userData={tableData} />
          <br />
          <br />
          <div className="text-center text-lg font-bold">
            Users - Type to filter by name:
          </div>
          <input
            id="filter"
            name="filter"
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={filter}
            onChange={(event) => setFilterQuery(event.target.value)}
          />
          <br />
        </div>
        <div>
          <table className="table min-w-full text-left text-sm font-light text-surface dark:text-white">
            <UsersTableHeaders
              coloumns={coloumns}
              processTableData={setSortQuery}
            />
            <CurrentUserContext.Provider value={setCurrentUser}>
              <UsersTableBody coloumns={coloumns} processedData={tableData} />
            </CurrentUserContext.Provider>
          </table>
        </div>
      </div>
    </>
  );
};
