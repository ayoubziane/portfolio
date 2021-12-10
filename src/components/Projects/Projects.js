import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


import admin from "../../Assets/Projects/admin_interface.png";
import mobile from "../../Assets/Projects/mobile_interface.png";
import health from "../../Assets/Projects/health_interface.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        Mes récentes <strong className="purple">réalisations </strong>
        </h1>
        <p style={{ color: "white" }}>
        Voici quelques projets sur lesquels j'ai travaillé dernièrement.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mobile}
              isBlog={false}
              isPdf={false}
              btnText="Voir le projet"
              /*
              Dzdistrix est une solution de gestion de distribution mobile permettant les vendeurs d'optimiser et de simplifier
          la gestion de leurs tournées quotidiennes et de maîtriser la chaîne logistique
          en permettant aux personnels de terrain à travailler de manière plus productive et efficace.
              
          Distribution management app used by the sellers built using native android approach 
          with Java and Firebase. it uses the right combination of sensors in the device to 
          determine the best location in a battery-efficient way. Have features which allows 
          user for real-time data sync, wireless printing as well as operating offline.
          */
              title="Solution de gestion de la distribution pour la société HENKEL - Partie Mobile"
              description="L'application de gestion de la distribution utilisée par les vendeurs est construite à l'aide d'une approche Android native avec Java et Firebase. Elle utilise la bonne combinaison de capteurs dans l'appareil pour déterminer la meilleure localisation d'une manière efficace en termes de batterie. Elle dispose de fonctionnalités qui permettent au vendeur de synchroniser les données en temps réel, d'imprimer sans fil et de continuer à travailler même sans accès à Internet."
              link="https://henkelmarketingservicedz-c1f4e.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={admin}
              isBlog={false}
              isPdf={false}
              btnText="Voir le projet"
              title="Solution de gestion de la distribution pour la société HENKEL - Partie Web"
              description="Application web de gestion de la distribution utilisée par le superviseur du backoffice pour suivre les ventes, la localisation en temps réel des vendeurs et bien plus encore. Elle est construite à l'aide de React-js, Firebase, Mapbox et OpenStreetMap. Après quelques études approfondies, j'ai conclu que Mapbox a un meilleur rapport qualité-prix que toute autre solution, y compris Google Maps. La web-app a des fonctionnalités qui permettent à l'administrateur d'avoir une vue complète de l'entreprise."
              link="https://henkelmarketingservicedz-c1f4e.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={health}
              isBlog={false}
              isPdf={true}
              btnText="Télécharger le rapport"
              title="Système d'urgence médicale pour le Hackathon Hack-Algeria 2020"
              description="Application mobile, basée sur la géolocalisation intelligente et en temps réel des services d'urgence,
               pour localiser le complexe ambulance-patient et le connecter à l'unité d'urgence optimale avec un côté admin pour la gestion de l'hôpital. Je l'ai développé pour participer au hackathon,
               puis je l'ai mise à jour avec une approche plus axée sur l'intelligence artificielle pour être utilisé comme mon projet de fin d'études. L'application a été construite en utilisant l'approche native Android avec Java, Firebase et l'algorithme de hachage Scrypt pour la sécurité."
              link=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
