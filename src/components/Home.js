import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "./Particle";
import Type from "./Type";
import Home2 from "./Home2";

function Home() {
  return (
    <div className="home">
    <section>     
      <Container fluid className="home-section" id="home">
      <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 , color:"#EDEEE9" , paddingTop : 50}} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              
              <h1 className="heading-name" style={{ color: "#EDEEE9" }}>
                We're
              <strong className="main-name" style={{ color: "#BF7341" }}>
              {" "}Bakery and Confectionery Classes
                </strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left" ,color: "#BF7341" , fontSize: "2.5em"}}>
                <Type />
              </div>

              <div style={{ padding: 50 }}></div>
            </Col>
            <Col md={5} style={{ paddingBottom: 20  ,paddingTop : 180}}>
            <img
      
                src="https://cdn-icons-png.flaticon.com/512/992/992711.png"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
    </div>
  );
}

export default Home;
