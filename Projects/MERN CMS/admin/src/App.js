import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Mainlayout from "./layout/mainlayout/Mainlayout";
import Settings from "./pages/settings/Settings";
import Createpage from "./pages/create-page/Createpage";
import Editpage from "./pages/edit-page/Editpage";
import { AuthContext } from "./context/authContext/AuthContext";

function App() {

  const {user} = useContext(AuthContext);

  return (
      <Router>
        <Routes>
        {user ?
          <Route path="/" element={<Mainlayout/>}>
            <Route index element={<Home />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/create-page" element={<Createpage />} />
            <Route path="/edit-page/:pageId" element={<Editpage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
          :
          <>
          <Route path="/">
            <Route index element={<Navigate to="/login" replace />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Route>
          <Route path="/login">
              <Route index element={<Login />} />
              <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
          </>
        }
        </Routes>
      </Router>
  );
}

export default App;