import React, { useState } from "react";

import "./AdminCourse.css";
import Allcourses from "./Allcourses";

const AdminCourse = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Web Development Fundamentals",
      description: "Description for Web Development Fundamentals",
      active: true,
    },
    {
      id: 2,
      title: "Introduction to JavaScript",
      description: "Description for Introduction to JavaScript",
      active: false,
    },
    {
      id: 3,
      title: "React.js for Beginners",
      description: "Description for React.js for Beginners",
      active: true,
    },
    {
      id: 4,
      title: "Ethical Hacking",
      description: "Description forEthical Hacking",
      active: false,
    },
    {
      id: 5,
      title: "Node.js and Express.js",
      description: "Description for Node.js and Express.js",
      active: true,
    },
    {
      id: 6,
      title: "Python Programming Basics",
      description: "Description for Python Programming Basics",
      active: false,
    },
    {
      id: 7,
      title: "Data Structures and Algorithms",
      description: "Description for Data Structures and Algorithms",
      active: true,
    },
    {
      id: 8,
      title: "Machine Learning with Python",
      description: "Description for Machine Learning with Python",
      active: false,
    },
    {
      id: 9,
      title: "Mobile App Development with React Native",
      description: "Description for Mobile App Development with React Native",
      active: true,
    },
    {
      id: 10,
      title: "UI/UX Design Principles",
      description: "Description for UI/UX Design Principles",
      active: false,
    },
  ]);

  const handleToggleActive = (id) => {
    setCourses((prevCourses) =>
      prevCourses.map((courses) =>
        courses.id === id ? { ...courses, active: !courses.active } : courses
      )
    );
  };

  const courselist = courses.map((data) => (
    <Allcourses
      key={data.id}
      courses={data}
      onToggleActive={handleToggleActive}
    />
  ));

  return (
    <div className="position">
      <h2>All Courses</h2>
      <div className="courses-list">
        {courses.length > 0 ? courselist : <p>No Courses</p>}
      </div>
    </div>
  );
};

export default AdminCourse;
