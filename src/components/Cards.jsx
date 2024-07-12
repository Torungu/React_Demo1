import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";
const Cards = () => {
  library.add(faUser);
  return (
    <Container>
      <Row xs={1} md={2} className="g-5">
        {Array.from({ length: 6 }).map((_, idx) => (
          <Col className="position-relative">
            <Card border="light">
              <FontAwesomeIcon
                icon="user"
                className="bg-primary text-white p-3 rounded-2 fs-4 position-absolute top-0 start-50 translate-middle"
              />
              <Card.Body className="text-center p-5 bg-light">
                <Card.Title className="fw-bold fs-4 my-2">
                  Fresh new layout
                </Card.Title>
                <Card.Text>
                  With Bootstrap 5, we've created a fresh new layout for this
                  template!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Cards;
