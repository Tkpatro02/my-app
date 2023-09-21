import React from "react";
import { CardBody,Card,CardText,Button,Container, CardSubtitle } from "reactstrap";

const Allcourses=({ course, onToggleActive})=>{
    return(
        <Card className="text-center">

            <CardBody className="text-center">
                <CardSubtitle>{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center">
                    <Button color="info" onClick={() => onToggleActive(course.id)}>Enroll</Button>
                    <Button color="info">Withdraw</Button>
                </Container>
            </CardBody>
        </Card>
    )
    
}
export default Allcourses;