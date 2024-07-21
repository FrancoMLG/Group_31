import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import AdminSideBar from "./admin_sidebar";
import {fetchUsers, updateUser} from "../../../api";

export default function AdminGrant() {
  const activeLinkId = "grant-link";

  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("profile"));
    fetchUsers()
      .then((response) => {
        setUsers(
          response.data.filter((user) => user._id !== currentUser.result._id)
        );
        setFilteredUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  useEffect(() => {
    let result = users;

    if (filter !== "all") {
      result = users.filter((user) =>
        filter === "technician"
          ? user.permissionLevel === "technician"
          : user.permissionLevel === "user"
      );
    }

    if (searchQuery) {
      result = result.filter((user) =>
        `${user.firstName} ${user.lastName}`
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      );
    }

    setFilteredUsers(result);
  }, [users, searchQuery, filter]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleButtonClick = (userId, permissionLevel) => {
    const newPermissionLevel =
      permissionLevel === "technician" ? "user" : "technician";

    updateUser(userId, {permissionLevel: newPermissionLevel})
      .then((response) => {
        const updatedUsers = users.map((user) =>
          user._id === userId ? response.data : user
        );
        setUsers(updatedUsers);
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  };

  return (
    <div className="container-fluid bg-body-tertiary vh-100 d-flex flex-column no-padding">
      <div className="row flex-grow-1">
        <div className="col-auto">
          <AdminSideBar activeLinkId={activeLinkId} />
        </div>
        <div className="col overflow-auto">
          <div className="container">
            <h1>Grant Privileges</h1>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Search users"
                value={searchQuery}
                onChange={handleSearchChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <select
                value={filter}
                onChange={handleFilterChange}
                className="form-select">
                <option value="all">All</option>
                <option value="user">User</option>
                <option value="technician">Technician</option>
              </select>
            </div>
            <ul className="list-group">
              {filteredUsers.map((user) => (
                <li
                  key={user._id}
                  className="list-group-item d-flex justify-content-between align-items-center">
                  {user.firstName} {user.lastName} -{" "}
                  {user.permissionLevel === "technician"
                    ? "Technician"
                    : "User"}
                  <button
                    className={`btn btn-${
                      user.permissionLevel === "technician"
                        ? "danger"
                        : "primary"
                    } ms-auto`}
                    onClick={() =>
                      handleButtonClick(user._id, user.permissionLevel)
                    }>
                    {user.permissionLevel === "technician" ? "Revoke" : "Grant"}{" "}
                    Technician Privileges
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
