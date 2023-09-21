import React from "react";
import './Courses.css';

const Courses = ({ courses, onToggleActive }) => {
  const { title, description, active } = courses;

  return (
    <div className={`course ${active ? 'active-course' : 'inactive-course'}`}>
      <h3>{title}</h3>
      <p>{description}</p>
      <button
        className={`toggle-button ${active ? 'active-button' : 'inactive-button'}`}
        onClick={() => onToggleActive(courses.id)}
      >
        {active ? 'Active' : 'Inactive'}
      </button>
    </div>
  );
};

export default Courses;
