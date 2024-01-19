import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sriram Alokam </span>
            from <span className="purple"> Edison, New Jersey.</span>
            <br />
            
            <br />
            I am a proficient and motivated problem solver with a strong academic background, having earned a <span className="purple"> Master's degree</span> in Computer Science from Texas Tech University. My expertise spans both frontend and backend technologies, reflecting a comprehensive skill set developed through hands-on experience and academic rigor.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> I play Chess, Cricket and volley ball
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading comics
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."{" "}
          </p>
          <footer className="blockquote-footer">Alokam Sriram</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
