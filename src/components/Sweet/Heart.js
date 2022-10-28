import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Heart2 from "./Heart2";
import Header2 from "../Header2";

function Heart() {
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
                  <span className="wave" role="img" aria-labelledby="wave">
                  💖
                  </span>
                  {" "}HEART{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                  💖
                  </span>
                </h1>
                <h1 className="heading-name" style={{ color: "#EDEEE9" }}>
                  BAKING
                  <strong className="main-name" style={{ color: "#FF98D0" }}>
                    {" "}
                    WITH{" "}
                  </strong>
                  HEART
                </h1>
              </Col>
            </Row>
          </Container>
        </Container>
        <Heart2 />
      </section>
    </div>
  );
}

export default Heart;
