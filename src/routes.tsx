import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import Header from "./Components/Header";
import {GlobalStyle} from "./css/styles"
import About from "./Pages/About";

export function AppRoutes() {
  return (
    <Router>
      <GlobalStyle />
      <Header onFormSubmit={onFormSubmit} />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

function onFormSubmit() {
  return 0
}
