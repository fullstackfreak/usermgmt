import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditUser = () => {
  const { id } = useParams(); // Get user ID from URL
  const navigate = useNavigate();

  // State to hold user data
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  // Fetch user details (Replace with API call in real-world use)
  useEffect(() => {
    const usersData = [
      { id: "1", name: "John Doe", email: "john@example.com" },
      { id: "2", name: "Jane Smith", email: "jane@example.com" },
      { id: "3", name: "Alice Brown", email: "alice@example.com" },
    ];
    const selectedUser = usersData.find((user) => user.id === id);
    if (selectedUser) {
      setUser(selectedUser);
    } else {
      alert("User not found!");
      navigate("/admin/users");
    }
  }, [id, navigate]);

  // Handle Input Changes
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated User:", user);
    alert("User details updated successfully!");
    navigate("/admin/users"); // Redirect after saving
  };

  return (
    <div className="container mt-4">
      <button
        type="button"
        className="btn btn-primary mb-3"
        onClick={() => navigate("/admin/users")}
      >
        <i className="fas fa-arrow-left"></i> Back to Users
      </button>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit} className="border p-4 rounded">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
            <label className="form-label">Age</label>
            <input
                type="number"
                className="form-control"
                name="age"
                value={user.age || ""}
                onChange={handleChange}
                required
            />
        </div>

        <div className="mb-3">
            <label className="form-label">Mobile</label>
            <input
                type="tel"
                className="form-control"
                name="mobile"
                value={user.mobile || ""}
                onChange={handleChange}
                required
            />
        </div>

        <div className="mb-3">
            <label className="form-label">Place</label>
            <input
                type="text"
                className="form-control"
                name="place"
                value={user.place || ""}
                onChange={handleChange}
                required
            />
        </div>

        <div className="mb-3">
            <label className="form-label">Photo</label>
            <input
                type="file"
                className="form-control"
                name="photo"
                onChange={(e) => setUser({ ...user, photo: e.target.files[0] })}
            />
        </div>

        <button type="submit" className="btn btn-success me-2">
          <i className="fas fa-save"></i> Save Changes
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => navigate("/admin/users")}
        >
          <i className="fas fa-times"></i> Cancel
        </button>
      </form>
    </div>
  );
};

export default EditUser;
