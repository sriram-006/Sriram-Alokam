import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaJenkins,FaDocker,FaAws,FaHtml5 } from "react-icons/fa";
import {
 
  DiReact,
 
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {

  SiPostgresql,
  SiMysql,
  SiApachekafka,
  SiKubernetes,
  SiKibana
} from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoSpringBoot />
        <p className="icon-names">Spring Boot</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
       
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p className="icon-names">Mongodb</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachekafka />
        <p className="icon-names">Apache Kafka</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes/>
        <p className="icon-names">Kubernetes</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p className="icon-names">React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaJenkins />
        <p className="icon-names">Jenkins</p>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <FaDocker />
        <p className="icon-names">Docker</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p className="icon-names">Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKibana />
        <p className="icon-names">Kibana</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
        <p className="icon-names">AWS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5/>
        <p className="icon-names">HTML5</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <p className="icon-names">Postgresql</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p className="icon-names">Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <p className="icon-names">Java</p>
      </Col>
    </Row>
  );
}

export default Techstack;
