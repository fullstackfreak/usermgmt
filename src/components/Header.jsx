import { useNavigate } from "react-router-dom";
import axios from "axios";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const refreshToken = localStorage.getItem("refreshToken");

    await axios.post("http://localhost:5000/auth/logout", { refreshToken });
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("/login");
  };
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <div className="row d-flex justify-content-end">
         
          <div className="col">
            <div className="col text-right">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <button
                  className="btn btn-outline-primary text-white"
                  onClick={() => handleLogout()}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
