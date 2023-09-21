import React from "react";
import LoginPage from "./Loginpage";
import Navbar from "./Navbar";
import AdminCourse from "./AdminCourse";
import Allcourses from "./Allcourses";
import Addcourses from "./Addcourses";
import Courses from "./Courses";
import "./App.css";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<LoginPage/>} />
        <Route path="/courses" element={<Courses />} />
       
      </Routes>
    </Router>
    </div>
  );
}

export default App;
