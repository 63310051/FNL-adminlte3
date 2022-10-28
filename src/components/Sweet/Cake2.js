import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Candy2() {
  return (
    <Container fluid className="home-about-section" id="home">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", color: "#FFB2B2" }}>
              INTRODUCE <span style={{ color: "#EDEEE9" }}> INGREDIENTS </span>
            </h1>
            <p
              className="home-header"
              style={{ fontSize: "1em", color: "#F2B9B8" }}
            >
              <b style={{ fontSize: "1.6em", color: "#EDEEE9" }}>
                {" "}
                🤍 2 cups boiling water{" "}
              </b>
              <br />
              <br />
              <b style={{ fontSize: "1.6em", color: "#D1EE48" }}>
                {" "}
                🤍 1 cup unsweetened cocoa powder{" "}
              </b>
              <br />
              <br />
              <b style={{ fontSize: "1.6em", color: "#EDEEE9" }}>
                {" "}
                🤍 2 ¾ cups all-purpose flour{" "}
              </b>
              <br />
              <br />
              <b style={{ fontSize: "1.6em", color: "#D1EE48" }}>
                {" "}
                🤍 2 teaspoons baking soda{" "}
              </b>
              <br />
              <br />
              <b style={{ fontSize: "1.6em", color: "#EDEEE9" }}>
                {" "}
                🤍 ½ teaspoon baking powder{" "}
              </b>
              <br />
              <br />
              <b style={{ fontSize: "1.6em", color: "#D1EE48" }}>
                {" "}
                🤍 ½ teaspoon salt{" "}
              </b>
              <br />
              <br />
              <b style={{ fontSize: "1.6em", color: "#EDEEE9" }}>
                {" "}
                🤍 1 cup butter, softened{" "}
              </b>
              <br />
              <br />
              <b style={{ fontSize: "1.6em", color: "#D1EE48" }}>
                {" "}
                🤍 2 ¼ cups white sugar{" "}
              </b>
              <br />
              <br />
              <b style={{ fontSize: "1.6em", color: "#EDEEE9" }}> 🤍 4 eggs </b>
              <br />
              <br />
              <b style={{ fontSize: "1.6em", color: "#D1EE48" }}>
                {" "}
                🤍 1 ½ teaspoons vanilla extract{" "}
              </b>
              <br />
              <br />
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", color: "#FFB2B2" }}>
              STEP <span style={{ color: "#EDEEE9" }}> AND </span>{" "}
              <span style={{ color: "#FFB2B2" }}> DIRECTION </span>
            </h1>
            <p
              className="home-header"
              style={{ fontSize: "1em", color: "#F2B9B8" }}
            >
              <b style={{ fontSize: "1.6em", color: "#EDEEE9" }}>
                {" "}
                Preheat oven to 350 degrees F (175 degrees C). Grease 3 - 9 inch
                round cake pans. In medium bowl, pour boiling water over cocoa,
                and whisk until smooth. Let mixture cool. Sift together flour,
                baking soda, baking powder and salt; set aside.{" "}
              </b>
              <br />
              <br />
              <b style={{ fontSize: "1.6em", color: "#EDEEE9" }}>
                {" "}
                In a large bowl, cream butter and sugar together until light and
                fluffy. Beat in eggs one at time, then stir in vanilla. Add the
                flour mixture alternately with the cocoa mixture. Spread batter
                evenly between the 3 prepared pans.{" "}
              </b>
              <br />
              <br />
              <b style={{ fontSize: "1.6em", color: "#EDEEE9" }}>
                {" "}
                Bake in preheated oven for 25 to 30 minutes. Allow to cool.{" "}
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
