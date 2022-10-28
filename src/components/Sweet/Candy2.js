import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Candy2() {
  return (
    <Container fluid className="home-about-section" id="home">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", color: "#F3D600" }}>
              INTRODUCE <span style={{ color: "#EDEEE9" }}> INGREDIENTS </span>
            </h1>
            <p
              className="home-header"
              style={{ fontSize: "1em", color: "#F2B9B8" }}
            >
              <b style={{ fontSize: "1.6em", color: "#EDEEE9" }}>
                {" "}
                🤍 1 (.6 ounce) package sugar-free fruit flavored gelatin mix{" "}
              </b>
              <br />
              <br />
              <b style={{ fontSize: "1.6em", color: "#FD342A" }}>
                {" "}
                🤍 6 (.25 ounce) envelopes unflavored gelatin{" "}
              </b>
              <br />
              <br />
              <b style={{ fontSize: "1.6em", color: "#EDEEE9" }}>
                {" "}
                🤍 ½ cup water{" "}
              </b>
              <br />
              <br />
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", color: "#F3D600" }}>
              STEP <span style={{ color: "#EDEEE9" }}> AND </span>{" "}
              <span style={{ color: "#F3D600" }}> DIRECTION </span>
            </h1>
            <p
              className="home-header"
              style={{ fontSize: "1em", color: "#F2B9B8" }}
            >
              <b style={{ fontSize: "1.6em", color: "#EDEEE9" }}>
                {" "}
                In a saucepan, stir together the sugar free gelatin, unflavored
                gelatin and water until it resembles dough. Warm over medium
                heat until melted.{" "}
              </b>
              <br />
              <br />
              <b style={{ fontSize: "1.6em", color: "#EDEEE9" }}>
                {" "}
                Pour into molds, or onto a baking tray. Refrigerate or freeze
                until firm, about 10 minutes in the freezer. Unmold or cut with
                cookie cutters and serve.{" "}
              </b>
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Candy2;
