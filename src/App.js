import React from "react";

import Navbar from "./Navbar";
import Allcourses from "./Allcourses";
import AdminCourse from "./AdminCourse";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />

      <AdminCourse />
    </div>
  );
}

export default App;
