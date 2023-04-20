import logo from './logo.svg';
import './App.css';
import AdminSignup from './Admin/AdminSignup';
import AdminLogin  from './Admin/AdminLogin';
import Header from './Header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function AdminApp() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path="/adminSignup" element={<AdminSignup />} />
          <Route path="/adminLogin" element={<AdminLogin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default AdminApp;
