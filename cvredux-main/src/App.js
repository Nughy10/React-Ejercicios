import "./App.css";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import NewEducation from "./pages/NewEducation";
import EditEducation from "./pages/EditEducation";
import NewExperience from "./pages/NewExperience";

function App() {
  return (
    <div className="app">
      <Router>
        <nav>
          <NavLink  to="/">Home</NavLink>
          <NavLink  to="/newEducation">New education</NavLink>
          <NavLink  to="/newExperience">New expererience</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newEducation" element={<NewEducation />} />
          <Route path="/editEducation/:id" element={<EditEducation />} />
          <Route path="/newExperience" element={<NewExperience />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
