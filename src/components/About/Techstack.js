import React from "react";
import { Col, Row } from "react-bootstrap";
import { GiWrappedSweet, GiCakeSlice } from "react-icons/gi";
import { FaCookieBite } from "react-icons/fa";
import { MdOutlineBakeryDining } from "react-icons/md";
import { RiCake3Fill, RiCake2Line } from "react-icons/ri";
function Techstack() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "80px",
        paddingTop: "20px",
        color: "white",
      }}
    >
      <Col xs={4} md={3} className="tech-icons">
        <ul className="home-about-social-links">
          <a href="/candy" style={{ color: "white" }}>
            <GiWrappedSweet />
          </a>
        </ul>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <ul className="home-about-social-links">
          <a href="/cookie" style={{ color: "white" }}>
          <FaCookieBite />
          </a>
        </ul>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <ul className="home-about-social-links">
          <a href="/pie" style={{ color: "white" }}>
          <GiCakeSlice />
          </a>
        </ul>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <ul className="home-about-social-links">
          <a href="/cakecup" style={{ color: "white" }}>
          <RiCake3Fill />
          </a>
        </ul>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <ul className="home-about-social-links">
          <a href="/cake" style={{ color: "white" }}>
          <RiCake2Line />
          </a>
        </ul>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <ul className="home-about-social-links">
          <a href="/croissant" style={{ color: "white" }}>
          <MdOutlineBakeryDining />
          </a>
        </ul>
      </Col>
    </Row>
  );
}

export default Techstack;
