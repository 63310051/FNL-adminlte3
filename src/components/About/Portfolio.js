import React from "react";
import Toolstack from "./Toolstack";
import Techstack from "./Techstack";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
function Portfolio() {
  return (
    <div className="port" id="port">
      <Container fluid className="about-section" >
        <Particle />
        <Container>
          <strong className="project-heading" style={{color : "#8CF1D3"}}>
            Choose Your First Baking Project
          </strong>
          <Techstack />
          <strong className="project-heading" style={{color : "#8CF1D3"}}>
            Important Tools
          </strong>
          <Toolstack />
        </Container>
      </Container>
    </div>
  );
}
export default Portfolio;
