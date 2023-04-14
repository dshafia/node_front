import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Header from './Header';
import Consent from './Consent';
import Demographics from './Demographics';
import Personality from './Personality';
import CG from './CG';
import Exp1 from './exp1';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/consent" element={<Consent />} />
          <Route path="/demographic" element={<Demographics />} />
          <Route path="/personality" element={<Personality />} />
          <Route path="/exp1" element={<Exp1 />} />
          <Route path="/CG" element={<CG />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
