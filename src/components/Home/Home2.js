import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillMail,
  AiFillFacebook
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            PERMETTEZ-MOI DE ME<span className="purple"> PRÉSENTER </span>
            </h1>
            <p className="home-about-body">
            Je suis tombé amoureux de la programmation et j'ai au moins appris
             quelque chose, je pense...  🤷‍♂️
              <br />
              <br />Je connais bien les classiques comme
              <i>
                <b className="purple"> C, Java, Javascript, C# </b>
              </i>
              et récemment je suis en train d'apprendre le <b className="purple"> Kotlin</b>.
              <br />
              <br />
              J'ai plusieurs années d'expérience dans le développement &nbsp;
              <i>
                <b className="purple">d'applications mobiles Android</b> avec moins d'années dans
                {" "}
                <b className="purple">
                les applications web frontend, en React-js
                </b> mais tout aussi intéressantes.
              </i>
              <br />
              <br />
              Je suis responsable du développement de plusieurs projets
               dont une solution web/mobile de gestion de la <b className="purple">distribution </b>
                et de la <b className="purple">géolocalisation</b> pour la multinationale HENKEL.
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>TROUVEZ-MOI SUR</h1>
            <p>
            N'hésitez pas à me <span className="purple">contacter</span>
            </p>
            <ul className="home-about-social-links">
            <li className="social-icons">
                <a
                  href="mailto:aybzianecherif@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
            <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ayoubziane"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://github.com/ayoubziane"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/ayoubziane00"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ayoubziane00"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
