import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiGit,
} from "react-icons/di";
import {  SiFirebase,SiAndroid,SiKotlin,SiJava,SiMysql,SiMapbox, SiOpenstreetmap } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <SiAndroid />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiKotlin />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMapbox />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpenstreetmap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
    </Row>
  );
}

export default Techstack;
