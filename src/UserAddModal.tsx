import { useState } from "react";
import { User } from "./getUsers";

export const UserAddModal = ({ addUser }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("invited");

  const onStausChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const u: User = {
      id: 51,
      name: e.target[0].value,
      email: e.target[1].value,
      status: selectedStatus,
    };
    console.log(u);
    addUser(u);
    setShowModal(false);
  };

  return (
    <>
      <button
        className="bg-gray-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add New User
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Enter User Data</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      X
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form
                    onSubmit={(e) => onSubmit(e)}
                    className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full"
                  >
                    <label className="block text-black text-sm font-bold mb-1">
                      Full Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-black text-sm font-bold mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
                      placeholder="Enter email"
                      required
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    />
                    <label className="block text-black text-sm font-bold mb-1">
                      Status
                    </label>

                    <input
                      onChange={onStausChange}
                      style={{ marginRight: 1 + "em" }}
                      type="radio"
                      id="invited"
                      name="status"
                      value="invited"
                      defaultChecked
                    />
                    <label className="text-black text-sm font-bold mb-1">
                      Invited
                    </label>
                    <br />
                    <input
                      onChange={onStausChange}
                      style={{ marginRight: 1 + "em" }}
                      type="radio"
                      id="active"
                      name="status"
                      value="active"
                    />
                    <label className="text-black text-sm font-bold mb-1">
                      Active
                    </label>
                    <br />
                    <input
                      onChange={onStausChange}
                      style={{ marginRight: 1 + "em" }}
                      type="radio"
                      id="expired"
                      name="status"
                      value="invite expired"
                    />
                    <label className="text-black text-sm font-bold mb-1">
                      Invite Expired
                    </label>
                    <br />

                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <input
                        className="text-black bg-blueGray-500 active:bg-blue-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="submit"
                        value="Submit"
                      ></input>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};
