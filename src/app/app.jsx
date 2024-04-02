import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Users from "./layouts/users";
import Login from "./layouts/login";
import Main from "./layouts/main";
import NavBar from "./components/ui/navBar";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/users/:userId?" element={<Users />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
