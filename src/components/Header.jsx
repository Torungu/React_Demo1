import React from "react";
import { Container, Nav, Row, Col } from "react-bootstrap";
const Header = () => {
  return (
    <div className="bg-dark text-white py-2 fs-6">
      <Container>
        <Row className="align-items-center">
          <Col>Start Boostrap</Col>
          <Col>
            <Nav
              activeKey="/home"
              onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
              className="justify-content-md-end"
            >
              <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
