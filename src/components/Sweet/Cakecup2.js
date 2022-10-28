import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Candy2() {
  return (
    <Container fluid className="home-about-section" id="home">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", color: "#FFE5C8" }}>
              INTRODUCE <span style={{ color: "#EDEEE9" }}> INGREDIENTS </span>
            </h1>
            <p
              className="home-header"
              style={{ fontSize: "1em", color: "#F2B9B8" }}
            >
              <b style={{ fontSize: "1.6em", color: "#EDEEE9" }}>
                {" "}
                🤍 16 vanilla wafer cookies{" "}
              </b>
              <br />
              <br />
              <b style={{ fontSize: "1.6em", color: "#FF6DC6" }}>
                {" "}
                🤍 2 (8 ounce) packages cream cheese, softened{" "}
              </b>
              <br />
              <br />
              <b style={{ fontSize: "1.6em", color: "#EDEEE9" }}>
                {" "}
                🤍 ¾ cup white sugar{" "}
              </b>
              <br />
              <br />
              <b style={{ fontSize: "1.6em", color: "#FF6DC6" }}> 🤍 2 eggs </b>
              <br />
              <br />
              <b style={{ fontSize: "1.6em", color: "#EDEEE9" }}>
                {" "}
                🤍 1 teaspoon vanilla extract{" "}
              </b>
              <br />
              <br />
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", color: "#FFE5C8" }}>
              STEP <span style={{ color: "#EDEEE9" }}> AND </span>{" "}
              <span style={{ color: "#FFE5C8" }}> DIRECTION </span>
            </h1>
            <p
              className="home-header"
              style={{ fontSize: "1em", color: "#F2B9B8" }}
            >
              <b style={{ fontSize: "1.6em", color: "#EDEEE9" }}>
                {" "}
                Preheat oven to 350 degrees F (175 degrees C). Line muffin pans
                with cupcake papers.{" "}
              </b>
              <br />
              <br />
              <b style={{ fontSize: "1.6em", color: "#EDEEE9" }}>
                {" "}
                Place one wafer cookie in the bottom of each cupcake paper. In a
                medium bowl, cream together cream cheese and sugar. Beat in eggs
                and vanilla until smooth. Pour over wafers in cupcake papers.{" "}
              </b>
              <br />
              <br />
              <b style={{ fontSize: "1.6em", color: "#EDEEE9" }}>
                {" "}
                Bake in preheated oven 15 minutes, until golden and set.{" "}
              </b>
              <br />
              <br />
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Candy2;
