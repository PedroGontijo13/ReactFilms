import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import Header from "./Components/Header";
import {GlobalStyle} from "./styles"

export function AppRoutes() {
  return (
    <Router>
      <GlobalStyle />
      <Header onFormSubmit={onFormSubmit} />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

function onFormSubmit() {
  return 0
}
