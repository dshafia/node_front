import './App.css';
import Login from './Users/Login';
import Header from './Header';
import Consent from './Users/Consent';
import Demographics from './Users/Demographics';
import Personality from './Users/Personality';
import CG from './Users/CG';
import Exp1 from './Users/exp1';
import Exp2 from './Users/exp2';
import DeepBrief from './Users/deepbief';
import AdminSignup from './Admin/AdminSignup'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminLogin from './Admin/AdminLogin';
import AdminHome from './Admin/AdminHome';
import Gameone from './Users/gameone';
import Moodsurvey from './Users/Moodsurvey';
import Resilience from './Users/resiliencepage';
import Gametwo from './Users/Gametwo/Gametwo';
import ControlGroup from './Users/MessageScreens/ControlGroup';
import ExpGroupOne from './Users/MessageScreens/ExpGroupOne';
import ExpGroupTwo from './Users/MessageScreens/ExpGroupTwo';
import ResilienceTwo from './Users/resiliencepagetwo';

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
          <Route path="/moodsurvey" element={<Moodsurvey />} />
          {/* <Route path="/CG" element={<CG />} /> */}
          <Route path="/cg" element={<Gametwo />} />
          {/* <Route path="/exp1" element={<Exp1 />} /> */}
          {/* <Route path="/exp2" element={<Exp2 />} /> */}
          <Route path="/exp1" element={<Gametwo />} />
          <Route path="/exp2" element={<Gametwo />} />
          <Route path="/resiliencesurvey" element={<Resilience />} />
          <Route path="/survey" element={<ResilienceTwo />} />
          <Route path="/gameone" element={<Gameone />} />
          <Route path="/deepbreif" element={<DeepBrief />} />
          <Route path="/adminSignup" element={<AdminSignup />} />
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/adminHome" element={<AdminHome />} />
          <Route path="/cgInfo" element={<ControlGroup />} />
          <Route path="/exponeInfo" element={<ExpGroupOne />} />
          <Route path="/exptwoInfo" element={<ExpGroupTwo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
