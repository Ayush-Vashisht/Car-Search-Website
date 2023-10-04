import { Route, Routes } from "react-router-dom";
import CarsPage from "./pages/CarsPage";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000/";
axios.defaults.withCredentials = true;

function App() {
  return (
    <Routes>
      <Route path="/" >
        <Route index element={<CarsPage />} />
        <Route path="/page" element={<CarsPage />} />
        <Route path="/page/:pageNo" element={<CarsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
