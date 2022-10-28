import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Cookie2 from "./Cookie2";
import laptopImg from "../../Assets/cookie.jpeg";
import Header2 from "../Header2";

function Cookie() {
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
                  CHAPTER 2{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                  🍪
                  </span>
                </h1>

                <h1 className="heading-name" style={{ color: "#EDEEE9" }}>
                Best Big, 
                  <strong className="main-name" style={{ color: "#8CF1D3" }}>
                    {" "}
                    Fat, Chewy
                  </strong>
                  Chocolate
                  <strong className="main-name" style={{ color: "#8CF1D3" }}>
                    {" "}
                    Chip Cookie
                  </strong>
                </h1>
                {/* <div style={{ padding: 50, textAlign: "left" ,color: "#F2B9B8" , fontSize: "2.5em"}}>
                <Type />
              </div> */}

                <div style={{ padding: 50 }}></div>
              </Col>
            </Row>
            <Col md={12} style={{ paddingBottom: 20, paddingTop: 20 }}>
              <p  style={{ color: "white" }}>
                <img src={laptopImg} alt="cookie" className="img-fluid" />
              </p>
            </Col>
          </Container>
        </Container>
        <Cookie2 />
      </section>
    </div>
  );
}

export default Cookie;
