import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Cakecup2 from "./Cakecup2";
import laptopImg from "../../Assets/minicake.jpg";
import Header2 from "../Header2";

function Cakecup() {
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
                    color: "#FFE5C8",
                    paddingTop: 50,
                  }}
                  className="heading"
                >
                  CHAPTER 4{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                  🧁
                  </span>
                </h1>
                <h1 className="heading-name" style={{ color: "#FFE5C8" }}>
                  Cheese
                  <strong className="main-name" style={{ color: "#FF6DC6" }}>
                    {" "}
                    Cake{" "}
                  </strong>
                  Cups
                </h1>

                <div style={{ padding: 50 }}></div>
                <p style={{ color: "white" }}>
                  <img src={laptopImg} alt="cakecup" className="img-fluid" />
                </p>
              </Col>
            </Row>
          </Container>
        </Container>
        <Cakecup2 />
      </section>
    </div>
  );
}

export default Cakecup;
