import "./App.css";
import react from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navigation from "./Components/navigation/navigation";
import Login from "./Components/login/login";

//App Function
function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
