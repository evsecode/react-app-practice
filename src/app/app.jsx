import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Users from "./layouts/users";
import Login from "./layouts/login";
import Main from "./layouts/main";
import NavBar from "./components/ui/navBar";
import { ProfessionProvider } from "./hooks/useProfession";
import { QualitiesProvider } from "./hooks/useQualities";

function App() {
  return (
    <div>
      <NavBar />
      <QualitiesProvider>
        <ProfessionProvider>
          <Routes>
            <Route path="/users/:userId?/:edit?" element={<Users />} />
            <Route path="/login/:type?" element={<Login />} />
            <Route path="/" element={<Main />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </ProfessionProvider>
      </QualitiesProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
