import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Cake2 from "./Cake2";
import laptopImg from "../../Assets/cake.jpg";
import Header2 from "../Header2";

function Cake() {
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
                  CHAPTER 5{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                  🎂 
                  </span>
                </h1>
                <h1 className="heading-name" style={{ color: "#EDEEE9" }}>
                  DARK
                  <strong className="main-name" style={{ color: "#D1EE48" }}>
                    {" "}
                    CHOCOLATE{" "}
                  </strong>
                  CAKE
                </h1>

                <div style={{ padding: 50 }}></div>
                <p style={{ color: "white" }}>
                  <img src={laptopImg} alt="cakecup" className="img-fluid" />
                </p>
              </Col>
            </Row>
          </Container>
        </Container>
        <Cake2 />
      </section>
    </div>
  );
}

export default Cake;
