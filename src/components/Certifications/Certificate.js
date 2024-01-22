import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificateCards from "./CertificateCards";
import Particle from "../Particle";
import developer from "../../Assets/aws developer.png";
function Certificate(){
    return( 
    <Container fluid className="project-section"    >
    <Particle />
    <Container>
      <h1 className="project-heading">
         <strong className="purple">CERTIFICATIONS</strong>
      </h1>
      
      <Row style={{ justifyContent: "flex-start", paddingBottom: "10px" }}>
        <Col md={4} className="certificate-card">
          <CertificateCards
            imgPath={developer}
            isBlog={false}
            title="AWS Associate Developer"
           
          />
        </Col>
        </Row>
      </Container>
    </Container>
);
}
export default Certificate;