import { Route, Routes } from "react-router-dom";
import LoginPage from "./Loginpage";
import AdminCourse from "./AdminCourse";
import Addcourses from "./Addcourses";
import Navbar from "./Navbar";

export default function mainRoutes() {
  let pathName = window.location.pathname;
  let arr = pathName.toString().split("/");
  let currentPath = arr[arr.length - 1];
  return (
    <>
      {currentPath.length < 0 && <Navbar />}
      <Routes>
        <Route path= "/" index element={<LoginPage />} />
        <Route path="/courses" element={<AdminCourse />} />
        <Route path="/contact" element={<Addcourses />} />
      </Routes>
    </>
  );
}
