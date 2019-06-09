import React from "react";
import { Container, Col, Row } from "reactstrap";
import "./im-taylor.css";
import Taylor from "../../images/box.png";

const ImTaylor = () => (
  <div className="intro-section">
    <Container>
      <Row>
        {/* <div className="intro-section"> */}
        <Col md="6">
          <h1 className="intro-hello">Hi, my name is Taylor</h1>
          <p className="intro-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of including versions Lorem Ipsum.
          </p>
        </Col>
        <Col md="6">
          <img src={Taylor} className="pic-of-tay" />
        </Col>
        {/* </div> */}
      </Row>
    </Container>
  </div>
);

export default ImTaylor;
