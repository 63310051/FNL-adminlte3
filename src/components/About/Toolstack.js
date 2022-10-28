import React from "react";
import { Col, Row } from "react-bootstrap";
// import { GiWhisk , GiForkKnifeSpoon , GiFruitBowl} from "react-icons/gi";
import { FcLikePlaceholder } from "react-icons/fc";
// import { RiKnifeFill } from "react-icons/ri";
// import {
//   SiCodechef,
// } from "react-icons/si";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" , color : "white" }}>
      {/* <Col xs={4} md={3} className="tech-icons">
      <ul className="home-about-social-links">
        <a href="/register"  style={{ color :"white"}} > 
        <GiWhisk />
        </a>
       </ul> 
      </Col> */}
      <Col xs={4} md={3} className="tech-icons">
      <ul className="home-about-social-links">
        <a href="/heart"  style={{ color :"white"}} > 
        <FcLikePlaceholder />
        </a>
       </ul> 
      </Col>
      
      {/* <Col xs={4} md={3} className="tech-icons">
        <GiForkKnifeSpoon />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <RiKnifeFill />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiCodechef />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <GiFruitBowl />
      </Col> */}
    </Row>
  );
}

export default Toolstack;
