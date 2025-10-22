import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accordion from "./components/Accordion";
import Home from "./page/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
