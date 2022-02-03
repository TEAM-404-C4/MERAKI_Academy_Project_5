import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./Components/MainPage/MainPage";
function App() {
  return (
    <div className="App">
      <h1>Start project 5</h1>
      <MainPage/>
      <Routes>
        <Route path="/MainPage" element={<MainPage />} />
       
      </Routes>
    </div>
  );
}

export default App;
