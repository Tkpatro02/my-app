import React, { Fragment } from "react";
import { Input, FormGroup, Container, Button } from "reactstrap";
import { marginLeft } from 'react-bootstrap';
import './Addcourses.css'

const Addcourses = () => {
  return (
    <Fragment>
      <div className="position">
        <h1>Fill Course Details</h1>
        <FormGroup>
          <label>Course Id</label>
          <Input
            type="text"
            placeholder="Enter Id"
            name="name"
            id="course id"
          />
        </FormGroup>
        <FormGroup>
          <label>Course Title</label>
          <Input
            type="text"
            placeholder="Enter text"
            name="name"
            id="course id"
          />
        </FormGroup>
        <FormGroup>
          <label>Course Description</label>
          <Input
            type="text"
            placeholder="Enter text"
            name="name"
            id="course id"
            style={{ height: 150 }}
          />
        </FormGroup>
        <Container>
          <Button color="success"style={{ marginTop: "10px" }}>Add course</Button>
          <Button color="warning mx-2"style={{ marginTop: "10px" }}>Clear</Button>
        </Container>
      </div>
    </Fragment>
  );
};

export default Addcourses;