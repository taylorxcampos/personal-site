import React from "react";
import { Container, Col, Row } from "reactstrap";
// import Taylor from "../../images/box.png";
import PropTypes from "prop-types";

const PastPresentFuture = ({ name }) => (
  <div className="intro-section">
    <Container>
      <Row>
        <Col md="4">
          <div>{name}</div>
        </Col>
      </Row>
    </Container>
  </div>
);

PastPresentFuture.propTypes = {
  name: PropTypes.string
};

export default PastPresentFuture;
