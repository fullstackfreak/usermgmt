import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";


const AdminPanel = () => {
  return (
    <div className="d-flex">
    <Sidebar />
      <div className="flex-grow-1">
        <Header />
        <div className="container mt-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
