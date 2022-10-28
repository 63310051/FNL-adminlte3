import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Candy2() {
  return (
    <Container fluid className="home-about-section" id="home">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", color: "#F4D0AB" }}>
              INTRODUCE <span style={{ color: "#EDEEE9" }}> INGREDIENTS </span>
            </h1>
            <p
              className="home-header"
              style={{ fontSize: "1em", color: "#F2B9B8" }}
            >
              <b style={{ fontSize: "1.6em", color: "#EDEEE9" }}>
                {" "}
                🤍 2 cups all-purpose flour{" "}
              </b>
              <br />
              <br />
              <b style={{ fontSize: "1.6em", color: "#8CF1D3" }}>
                {" "}
                🤍 ½ teaspoon baking soda{" "}
              </b>
              <br />
              <br />
              <b style={{ fontSize: "1.6em", color: "#EDEEE9" }}>
                {" "}
                🤍 ½ teaspoon salt{" "}
              </b>
              <br />
              <br />
              <b style={{ fontSize: "1.6em", color: "#8CF1D3" }}>
                {" "}
                🤍 ¾ cup unsalted butter, melted{" "}
              </b>
              <br />
              <br />
              <b style={{ fontSize: "1.6em", color: "#EDEEE9" }}>
                {" "}
                🤍 1 cup packed brown sugar{" "}
              </b>
              <br />
              <br />
              <b style={{ fontSize: "1.6em", color: "#8CF1D3" }}>
                {" "}
                🤍 ½ cup white sugar{" "}
              </b>
              <br />
              <br />
              <b style={{ fontSize: "1.6em", color: "#EDEEE9" }}>
                {" "}
                🤍 1 tablespoon vanilla extract{" "}
              </b>
              <br />
              <br />
              <b style={{ fontSize: "1.6em", color: "#8CF1D3" }}>
                {" "}
                🤍 1 egg + 1 egg yolk{" "}
              </b>
              <br />
              <br />
              <b style={{ fontSize: "1.6em", color: "#EDEEE9" }}>
                {" "}
                🤍 2 cups semisweet chocolate chips{" "}
              </b>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", color: "#F4D0AB" }}>
              STEP <span style={{ color: "#EDEEE9" }}> AND </span>{" "}
              <span style={{ color: "#F4D0AB" }}> DIRECTION </span>
            </h1>
            <p
              className="home-header"
              style={{ fontSize: "1em", color: "#F2B9B8" }}
            >
              <b style={{ fontSize: "1.6em", color: "#EDEEE9" }}>
                {" "}
                Preheat the oven to 325 degrees F (165 degrees C). Grease cookie
                sheets or line with parchment paper.{" "}
              </b>
              <br />
              <br />
              <b style={{ fontSize: "1.6em", color: "#EDEEE9" }}>
                {" "}
                Sift together the flour, baking soda and salt; set aside.{" "}
              </b>
              <b style={{ fontSize: "1.6em", color: "#EDEEE9" }}>
                {" "}
                In a medium bowl, cream together the melted butter, brown sugar
                and white sugar until well blended. Beat in the vanilla, egg,
                and egg yolk until light and creamy.{" "}
              </b>
              <br />
              <br />
              <b style={{ fontSize: "1.6em", color: "#EDEEE9" }}>
                Mix in the sifted ingredients until just blended. Stir in the
                chocolate chips by hand using a wooden spoon. Drop cookie dough
                1/4 cup at a time onto the prepared cookie sheets. Cookies
                should be about 3 inches apart.
              </b>
              <br />
              <br />
              <b style={{ fontSize: "1.6em", color: "#EDEEE9" }}>
                {" "}
                Bake for 15 to 17 minutes in the preheated oven, or until the
                edges are lightly toasted. Cool on baking sheets for a few
                minutes before transferring to wire racks to cool completely.{" "}
              </b>
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Candy2;
