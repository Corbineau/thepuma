import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>You let the rope slacken.</h1>
            <p>
              And now have been eaten by a puma. Sorry. Try another page.
            </p>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
