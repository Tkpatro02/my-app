import React from "react";
import "./Allcourses.css";
import { CardBody,Card,CardText,Button,Container, CardSubtitle } from "reactstrap";

const Allcourses=({ courses, onToggleActive})=>{
    return(
        <Card  color="dark"
        body
        outline
        style={{
          width: '18rem'
        }}
        >

            <CardBody className="text-center">
                <CardSubtitle tag="h2" style={{color:"White" }}>{courses.title}</CardSubtitle>
                <CardText style={{color:"black" }}>{courses.description}</CardText>
                <Container className="text-center">
                    <Button color="info" onClick={() => onToggleActive(courses.id)}>Enroll</Button>
                    <Button color="info"style={{ marginTop: "10px" }}>Withdraw</Button>
                </Container>
            </CardBody>
        </Card>
    )
    
}
export default Allcourses;