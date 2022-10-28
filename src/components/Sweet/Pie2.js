import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Pie2() {
  return (
    <Container fluid className="home-about-section" id="home">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", color: "#F4CF77" }}>
              INTRODUCE <span style={{ color: "#EDEEE9" }}> INGREDIENTS </span>
            </h1>
            <p
              className="home-header"
              style={{ fontSize: "1em", color: "#F2B9B8" }}
            >
              <b style={{ fontSize: "1.6em", color: "#EDEEE9" }}>
                {" "}
                🤍 1 (1 pound) sweet potato, with skin{" "}
              </b>
              <br />
              <br />
              <b style={{ fontSize: "1.6em", color: "#F5E0B5" }}>
                {" "}
                🤍 ½ cup butter, softened{" "}
              </b>
              <br />
              <br />
              <b style={{ fontSize: "1.6em", color: "#EDEEE9" }}>
                {" "}
                🤍 1 cup white sugar{" "}
              </b>
              <br />
              <br />
              <b style={{ fontSize: "1.6em", color: "#F5E0B5" }}>
                {" "}
                🤍 ½ cup milk{" "}
              </b>
              <br />
              <br />
              <b style={{ fontSize: "1.6em", color: "#EDEEE9" }}>
                {" "}
                🤍 2 large eggs{" "}
              </b>
              <br />
              <br />
              <b style={{ fontSize: "1.6em", color: "#F5E0B5" }}>
                {" "}
                🤍 ½ teaspoon ground nutmeg{" "}
              </b>
              <br />
              <br />
              <b style={{ fontSize: "1.6em", color: "#EDEEE9" }}>
                {" "}
                🤍 ½ teaspoon ground cinnamon{" "}
              </b>
              <br />
              <br />
              <b style={{ fontSize: "1.6em", color: "#F5E0B5" }}>
                {" "}
                🤍 1 teaspoon vanilla extract{" "}
              </b>
              <br />
              <br />
              <b style={{ fontSize: "1.6em", color: "#EDEEE9" }}>
                {" "}
                🤍 1 (9 inch) unbaked pie crust{" "}
              </b>
              <br />
              <br />
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", color: "#F4CF77" }}>
              STEP <span style={{ color: "#EDEEE9" }}> AND </span>{" "}
              <span style={{ color: "#F4CF77" }}> DIRECTION </span>
            </h1>
            <p
              className="home-header"
              style={{ fontSize: "1em", color: "#F2B9B8" }}
            >
              <b style={{ fontSize: "1.6em", color: "#EDEEE9" }}>
                {" "}
                Place whole sweet potato in pot and cover with water; bring to a
                boil. Boil until tender when pierced with a fork, 40 to 50
                minutes.{" "}
              </b>
              <br />
              <br />
              <b style={{ fontSize: "1.6em", color: "#EDEEE9" }}>
                {" "}
                Preheat the oven to 350 degrees F (175 degrees C).{" "}
              </b>
              <br />
              <br />
              <b style={{ fontSize: "1.6em", color: "#EDEEE9" }}>
                {" "}
                Remove sweet potato from the pot and run under cold water.
                Remove and discard skin.{" "}
              </b>
              <br />
              <br />
              <b style={{ fontSize: "1.6em", color: "#EDEEE9" }}>
                {" "}
                Break sweet potato flesh apart and place in a bowl. Add butter
                and mix with an electric mixer until well combined. Add sugar,
                milk, eggs, nutmeg, cinnamon, and vanilla; beat on medium speed
                until mixture is smooth. Pour filling into unbaked pie crust.{" "}
              </b>
              <br />
              <br />
              <b style={{ fontSize: "1.6em", color: "#EDEEE9" }}>
                {" "}
                Bake in the preheated oven until a knife inserted in the center
                comes out clean, 55 to 60 minutes.{" "}
              </b>
              <br />
              <br />
              <b style={{ fontSize: "1.6em", color: "#EDEEE9" }}>
                {" "}
                Remove from the oven and let cool before serving.{" "}
              </b>
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Pie2;
