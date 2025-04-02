import { Link } from "react-router-dom";
import { Accordion, Card, Button } from "react-bootstrap";

const Sidebar = () => {
  return (
    <div className="d-flex flex-column p-3 bg-dark text-white vh-100">
      <h4 className="text-center">Admin Panel</h4>

      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link text-white" to="/admin">
            <i className="fas fa-tachometer-alt"></i> Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/admin/users">
            <i className="fas fa-users"></i> Users
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/admin/product/add">
            <i className="fas fa-users"></i> Product
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/admin/product/add">
            <i className="fas fa-users"></i> Add Category
          </Link>
        </li>

        <li className="nav-item"></li>
      </ul>
    </div>
  );
};

export default Sidebar;
