import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import react from "../../Assets/Projects/react.png";
import kubernates from "../../Assets/Projects/kubernates.png";
import security from "../../Assets/Projects/spring security.png";
import microservices from "../../Assets/Projects/microservices.png";
import authantication from "../../Assets/Projects/authantication.png";
import kafka from "../../Assets/Projects/kafka.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={microservices}
              isBlog={false}
              title="Microservices"
              description="Spring microservices architecture leverages the Spring Boot framework to build independently deployable and scalable services. Each microservice focuses on a specific business capability, promoting modularity and agility. Spring Cloud provides additional tools and libraries such as service discovery, configuration management, and distributed tracing."
              ghLink="https://github.com/sriram-006/Microservices_With_SpringBoot"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kafka}
              isBlog={false}
              title="Kafka with Spring Boot"
              description="Kafka with Spring Boot enables seamless integration of Apache Kafka, a distributed streaming platform, with Spring Boot applications. This powerful combination facilitates real-time data streaming and event-driven architectures."
              ghLink="https://github.com/sriram-006/Asynchronous_Communication_Kafka"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={security}
              isBlog={false}
              title="Spring Security"
              description="Spring Security with Spring Boot provides a comprehensive solution for securing Java-based applications. It offers a robust and customizable authentication and authorization framework, seamlessly integrated with Spring Boot projects." 
              ghLink="https://github.com/sriram-006/Spring_Security"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={react}
              isBlog={false}
              title="React App"
              description="React is a JavaScript library for building user interfaces that enables the creation of interactive and dynamic web applications. React allows developers to build reusable UI components, making it efficient for constructing modern, single-page applications.  ."
              ghLink="https://github.com/sriram-006/react-app"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={authantication}
              isBlog={false}
              title="Authantication Server"
              description="An authentication server is a dedicated component responsible for verifying and validating user identities within a software system. It serves as a centralized authority for user authentication, ensuring secure access to protected resources."
              ghLink="https://github.com/sriram-006/authantication_server"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kubernates}
              isBlog={false}
              title="Kubernates Deployment"
              description="Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. Developed by Google, Kubernetes simplifies the deployment and operation of containerized applications by providing a consistent and declarative infrastructure."
              
             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
