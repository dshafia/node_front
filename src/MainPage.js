import './App';
import AdminApp from './AdminApp';
import Login from './Users/Login';
import Header from './Header';
import Consent from './Users/Consent';
import Demographics from './Users/Demographics';
import Personality from './Users/Personality';
import CG from './Users/CG';
import Exp1 from './Users/exp1';
import Exp2 from './Users/exp2';
import DeepBrief from './Users/deepbief';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Gametwo from './Users/Gametwo/Gametwo';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
        <Route path="/login" element={<Login />} />
          <Route path="/consent" element={<Consent />} />
          <Route path="/demographic" element={<Demographics />} />
          <Route path="/personality" element={<Personality />} />
          {/* <Route path="/CG" element={<CG />} /> */}
          <Route path="/CG" element={<Gametwo />} />
          <Route path="/exp1" element={<Exp1 />} />
          <Route path="/exp2" element={<Exp2 />} />
          <Route path="/deepbreif" element={<DeepBrief />} />
          <Route path="/userLogin" element={<App />} />
          <Route path="/adminLogin" element={<AdminApp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
