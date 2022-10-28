import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { HiCake } from "react-icons/hi";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="home">
      <Container>
        <Row>
          <Col md={12}>
            <h1 style={{ fontSize: "2.6em", color: "#BF7341" }}>
              LET US <span style={{ color: "#EDEEE9" }}> INTRODUCE </span> OUR
              CLASSES
            </h1>
          </Col>
          <Col md={6} className="home-about-description">
            <h1 style={{ fontSize: "2em", color: "#BF7341" }}>
              SYLLABUS:{" "}
              <span style={{ color: "#EDEEE9" }}>
                {" "}
                HERE IS WHAT YOU WILL LEARN{" "}
              </span>{" "}
              🪄
            </h1>
            <p className="home-about-body" style={{ color: "#F2B9B8" }}>
              <b style={{ color: "#EDEEE9" }}>
                {" "}
                Baking For Beginners Course comprises of ten modules,
                <span style={{ color: "#8CF1D3" }}>
                  {" "}
                  where each module provides you with the knowledge, skills,{" "}
                </span>
                guidance and tips you need to start baking{" "}
              </b>
              <br />
              <br />
              <b style={{ color: "#EDEEE9" }}>
                {" "}
                <i>Let’s have a look at the syllabus below ✍🏼 </i>
              </b>
              <br />
              <br />
              <b style={{ color: "#F2B9B8" }}>
                {" "}
                The very basics of baking :{" "}
                <span style={{ color: "#EDEEE9" }}>
                  {" "}
                  Basic baking related terms. <br /> What are the essential
                  baking tools you should have ? <br /> What are the important
                  ingredients for baking ?{" "}
                </span>
              </b>
              <br />
              <br />
              <b style={{ color: "#8CF1D3" }}>
                {" "}
                What you should know before you actually start baking?{" "}
                <span style={{ color: "#EDEEE9" }}>
                  {" "}
                  <br />
                  The most important baking tips for beginners. <br /> How to
                  preheat an oven ?{" "}
                </span>
              </b>
            </p>
          </Col>
          <Col md={4} className="home-about-description" id="home2">
            <p className="home-about-body" style={{ color: "white" }}>
              <img
                src="https://purepng.com/public/uploads/medium/purepng.com-cookiescookiessnacksbaked-snacksflour-cookieschocolate-cookies-1411527249039qktv5.png"
                style={{ maxHeight: "250px" }}
              />
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
                <HiCake />
              </a>
              {/* <li className="social-icons">
                <a
                  // href="https://www.facebook.com/onwanyasakharetxane"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
