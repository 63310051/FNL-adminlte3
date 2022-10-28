import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import { FcLikePlaceholder } from "react-icons/fc";

function About() {
  return (
    <div className="about" id="about">
      <Container fluid className="about-section" style={{ paddingtoop: 10 }}>
        <Particle />
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col md={12}>
              <h1 style={{ fontSize: "2.6em", color: "#BF7341" }}>
                ALL THIS{" "}
                <span style={{ color: "#EDEEE9" }}> AND MANY OTHER </span>{" "}
                BASICS OF BAKING!
              </h1>

              {/* <Aboutcard /> */}
            </Col>
            <Col md={6} className="home-about-description">
              <p className="home-about-body" style={{ color: "#F2B9B8" }}>
                <b style={{ color: "#EDEEE9" }}>
                  {" "}
                  Well, we also have an entire section
                  <span style={{ color: "#8CF1D3" }}>
                    <i> dedicated to eggless baking recipes!!! </i>
                  </span>
                </b>

                <br />
                <br />
                <b style={{ color: "#F2B9B8" }}>
                  {" "}
                  How to bake without an oven? :{" "}
                  <span style={{ color: "#EDEEE9" }}>
                    {" "}
                    Don’t have an oven ? <br /> No problem. Learn how to bake without an oven. {" "}
                  </span>
                </b>
                <br />
                <br />
                <b style={{ color: "#8CF1D3" }}>
                  {" "}
                  How to bake your first perfect cake?{" "}
                  <span style={{ color: "#EDEEE9" }}>
                    {" "}
                    <br />
                    Important tips for preparing the perfect cake batter. <br />{" "}
                    How to avoid your cake from getting burnt ? <br /> What’s
                    the best temperature for baking cakes ? <br /> How to check
                    if your cake is ready or not ? for baking?{" "}
                  </span>
                </b>
              </p>
            </Col>
            <Col md={4} className="home-about-description" id="home2">
              <p className="home-about-body" style={{ color: "white" }}>
                <img src={laptopImg} alt="about" className="img-fluid" />
              </p>
            </Col>
          </Row>
          <Row>
          <Col md={12} className="home-about-social">
            <br />
            <br />
            <h1 style={{ color: "white" }}> JOIN US FOR 999 .-</h1>

            <ul className="home-about-social-links">
              <a
                style={{ color: "white" }}
                href="/register"
                target="_blank"
                rel="noreferrer"
                className="tech-icons"
              >
                <FcLikePlaceholder />
              </a>
            </ul>
          </Col>
        </Row>
        </Container>
      </Container>
    </div>
  );
}

export default About;
