import React from "react";
import { Container, Button, Card } from "react-bootstrap";

const Carousel = () => {
  return (
    <div>
      <Container className="py-5">
        <Card border="light" style={{ width: "100%" }}>
          <Card.Body className="text-center p-5 bg-light">
            <Card.Title className="fw-bold fs-1 my-3">
              A warm welcome!
            </Card.Title>
            <Card.Text className="fs-5 px-5 my-3 mx-5">
              Bootstrap utility classes are used to create this jumbotron since
              the old
              <br />
              component has been removed from the framework. Why create custom
              CSS
              <br /> when you can use utilities?
            </Card.Text>
            <Button variant="primary" className="my-3">
              Call to Action
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Carousel;
