import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
//import Carousel from 'react-bootstrap/Carousel'

import pdf from "../../Assets/memoire_pfe_ziane-cherif-ayoub.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {/*<Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={props.imgPath1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={props.imgPath2}
            alt="Third slide"
          />

          
        </Carousel.Item>
      </Carousel>*/}
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.isPdf ?
          (
            <Button variant="primary" href={pdf} target="_blank">
              <AiOutlineDownload />
              &nbsp;Télécharger le rapport
            </Button>
          )
          :
          (
            <Button variant="primary" href={props.link} target="_blank">
              <BiLinkExternal /> &nbsp;
              {props.isBlog ? "View Blog" : props.btnText}
            </Button>
          )
          }

      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
