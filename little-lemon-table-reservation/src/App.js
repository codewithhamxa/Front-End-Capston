import "./App.css";
import Home from "./Pages/Home";
import Reservation from "./Pages/Reservation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Reservation" element={<Reservation />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
