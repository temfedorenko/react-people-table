import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/pages/HomePage";
import PeoplePage from "./components/pages/PeoplePage";
import NotFoundPage from "./components/pages/NotFoundPage";

import "./App.scss";

export const App = () => (
  <HashRouter>
    <Navbar />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/people">
        <Route index element={<PeoplePage />} />
        <Route path=":slug" element={<PeoplePage />} />
      </Route>
      <Route path="/home" element={<Navigate replace to="/" />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </HashRouter>
);
