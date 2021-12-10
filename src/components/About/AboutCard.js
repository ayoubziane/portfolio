import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour à tous, je suis <span className="purple">Ayoub Ziane Cherif </span>
            d'<span className="purple">Ain-Temouchent, Algérie.</span>
            <br />
            Je suis fraîchement diplômé d'un Master en Informatique dans la spécialité Réseaux et 
            Ingénierie des données de l'Université d'Ain-temouchent.
            <br />
            <br />
            À part le coding, quelques autres activités que j'aime faire !
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Apprendre les langues
            </li>
            <li className="about-activity">
              <ImPointRight /> Jouer à des jeux
            </li>
            <li className="about-activity">
              <ImPointRight /> Voyager
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Le Web tel que je l'ai envisagé, nous ne l'avons pas encore vu."{" "}
          </p>
          <footer className="blockquote-footer">Tim Berners-Lee, inventeur du World Wide Web</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
