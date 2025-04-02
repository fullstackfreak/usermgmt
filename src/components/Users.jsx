import { useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  // Sample Users Data (Replace with API Data)
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Alice Brown", email: "alice@example.com" },
  ]);

  // Delete User Function
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmDelete) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  return (
    <div className="container mt-4">
      <Link to="/admin" className="btn btn-secondary mb-3">
        <i className="fas fa-arrow-left"></i> Back
      </Link>
      <Link to="/admin/users/add" className="btn btn-primary mb-3">
        <i className="fas fa-user-plus"></i> Add New User
      </Link>
      <h2>Users</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th> {/* New Column for Actions */}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                {/* Edit Button - Navigates to Edit Page */}
                <Link
                  to={`/admin/users/edit/${user.id}`}
                  className="btn btn-warning btn-sm me-2"
                >
                  <i className="fas fa-edit"></i> Edit
                </Link>

                {/* Delete Button - Calls Delete Function */}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(user.id)}
                >
                  <i className="fas fa-trash-alt"></i> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
