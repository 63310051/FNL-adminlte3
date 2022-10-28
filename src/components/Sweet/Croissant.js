import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Croissant2 from "./Croissant2";
import laptopImg from "../../Assets/croissant.jpg";
import Header2 from "../Header2";

function Croissant() {
  return (
    <div className="home">
      <Header2 />
      <section>
        <Container fluid className="home-section" id="home">
          <Particle />
          <Container className="home-content">
            <Row>
              <Col md={12} className="home-header">
                <h1
                  style={{
                    paddingBottom: 15,
                    color: "#EDEEE9",
                    paddingTop: 50,
                  }}
                  className="heading"
                >
                  CHAPTER 6{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                  🥐 
                  </span>
                </h1>
                <h1 className="heading-name" style={{ color: "#EDEEE9" }}>
                  DARK
                  <strong className="main-name" style={{ color: "#AAD3E8" }}>
                    {" "}
                    CHOCOLATE{" "}
                  </strong>
                  CAKE
                </h1>

                <div style={{ padding: 50 }}></div>
                <p style={{ color: "white" }}>
                  <img src={laptopImg} alt="croissant" className="img-fluid" />
                </p>
              </Col>
            </Row>
          </Container>
        </Container>
        <Croissant2 />
      </section>
    </div>
  );
}

export default Croissant;
