
import { Routes, Route } from "react-router-dom";
import Page from "../pages/404";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { TecProvider } from "../providers/TecContext";


const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={ <TecProvider><Home /></TecProvider> } />
      <Route path="*" element={<Page />} />
    </Routes>
  );
};
export default AppRoutes;
