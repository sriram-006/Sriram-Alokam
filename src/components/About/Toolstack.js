import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiMacos,
  SiWindows,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
        <p className="icon-names">Windows</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p className="icon-names">Visual Studio</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p className="icon-names">Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
        <p className="icon-names">Slack</p>
      </Col>
     
    </Row>
  );
}

export default Toolstack;
