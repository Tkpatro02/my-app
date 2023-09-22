import React from "react";
import LoginPage from "./Loginpage";
import Navbar from "./Navbar";
import AdminCourse from "./AdminCourse";

import Addcourses from "./Addcourses";

import "./App.css";
import { BrowserRouter as Routes, Route, Router } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/courses" element={<AdminCourse />} />
          <Route path="/contact" element={<Addcourses />} />
        </Routes>
      
    </div>
    </Router>
  );
}

export default App;
