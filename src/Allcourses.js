

import React from "react";
import "./Allcourses.css";
import { CardBody, Card, CardText, Button, Container, CardSubtitle } from "reactstrap";

const Allcourses = ({ courses, onToggleActive }) => {
  return (
    <Card
      color="dark"
      body
      outline
      className="course-card"
    >
      <CardBody className="text-center">
        <CardSubtitle tag="h2" className="course-title">
          {courses.title}
        </CardSubtitle>
        <CardText className="course-description">{courses.description}</CardText>
        <Container className="text-center">
          <Button color="info" onClick={() => onToggleActive(courses.id)} className="enroll-button">
            Enroll
          </Button>
          <Button color="info" style={{ marginTop: "10px" }} className="withdraw-button">
            Withdraw
          </Button>
        </Container>
      </CardBody>
    </Card>
  );
};

export default Allcourses;
