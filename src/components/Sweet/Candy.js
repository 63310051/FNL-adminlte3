import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Candy2 from "./Candy2";
import laptopImg from "../../Assets/gummy.jpg";
import Header2 from "../Header2";

function Candy() {
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
                  CHAPTER 1{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    🍬
                  </span>
                </h1>

                <h1 className="heading-name" style={{ color: "#EDEEE9" }}>
                  We're Making
                  <strong className="main-name" style={{ color: "#FD342A" }}>
                    {" "}
                    Gummy Candy
                  </strong>
                </h1>
                {/* <div style={{ padding: 50, textAlign: "left" ,color: "#F2B9B8" , fontSize: "2.5em"}}>
                <Type />
              </div> */}

                <div style={{ padding: 50 }}></div>
              </Col>
            </Row>
            <Col md={12} style={{ paddingBottom: 20, paddingTop: 20 }}>
              <p style={{ color: "white" }}>
                <img src={laptopImg} alt="gummy" className="img-fluid" />
              </p>
            </Col>
          </Container>
        </Container>
        <Candy2 />
      </section>
    </div>
  );
}

export default Candy;
