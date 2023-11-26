import React, { Fragment } from "react";
import { Input, FormGroup, Container, Button } from "reactstrap";
import './Addcourses.css'
import SearchBar from "./Searchbox";
const Addcourses = () => {
  return (
   
    <Fragment>
      
     
      <div className="position">
        <h1>Fill Course Details</h1>
        <FormGroup>
          <label>Search Course</label>
          <Input
            type="text"
            placeholder="Search by title or ID"
            name="search"
            id="search"
          />
        </FormGroup>
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
        <Container>
    <SearchBar/>
   </Container>
      </div>
    </Fragment>
    
  );
  
};

export default Addcourses;