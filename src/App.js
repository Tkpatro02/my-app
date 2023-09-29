import React from "react";
import LoginPage from "./Loginpage";
import Navbar from "./Navbar";
import AdminCourse from "./AdminCourse";

import Addcourses from "./Addcourses";

import "./App.css";
import { BrowserRouter as Routes, Route, Router } from "react-router-dom";
import mainRoutes from "./routes";

function App() {
  return (
    <Routes>
      <div className="App">

        {mainRoutes()}
      </div>
    </Routes>
  );
}

export default App;
