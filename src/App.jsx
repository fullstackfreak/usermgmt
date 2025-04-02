import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Users from "./components/Users";
import AdminPanel from "./pages/AdminPanel";
import Login from "./pages/Login";
import EditUser from "./components/Edituser";
import AddUser from "./components/addUser";
import AddProduct from "./components/addProduct";
import ListProduct from "./components/listProduct";

function App() {
  const isAuthenticated = () => true;

  const PrivateRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminPanel />
            </PrivateRoute>
          }
        >
          <Route element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="users/edit/:id" element={<EditUser />} />
          <Route path="users/add" element={<AddUser />} />
          <Route path="product/add" element={<ListProduct />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
