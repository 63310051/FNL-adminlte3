import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Heart2() {
  return (
    <Container fluid className="home-about-section" id="home">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <p className="home-header" style={{ fontSize: "1em" }}>
              <b style={{ fontSize: "1.6em", color: "#EDEEE9" }}>
                {" "}
                🤍 Cooking, when you look at it, is chemistry. Combining
                substances, applying heat in various ways, causing chemical
                reactions.{" "}
              </b>
              <br />
              <br />
              <b style={{ fontSize: "1.6em", color: "#FF98D0" }}>
                {" "}
                Some bake follow recipes very precisely. They are trying to
                recreate someone else’s creation. There’s nothing wrong with
                this. It can be done out of love - a mother loves her family and
                wants to make them a home-baked meal, follows a recipe, and the
                result is perfectly satisfactory.{" "}
              </b>
              <br />
              <br />
              <b style={{ fontSize: "1.6em", color: "#EDEEE9" }}>
                {" "}
                But some bake, myself included, like to put their own spin on
                things. I cook for the über-hub and myself most of the time, so
                I put in lots of spicy peppers because we like our food to make
                us sweat. Butter, cream, paprika, onions, fresh thyme…these are
                some of our favorite ingredients and I use them often.{" "}
              </b>
              <br />
              <br />
              <b style={{ fontSize: "1.6em", color: "#FF98D0" }}>
                {" "}
                When I’m cooking for his mother, I use a lot less chilis because
                spicy foods upset her stomach. She doesn’t care for onions, so I
                leave those out.{" "}
              </b>
              <br />
              <br />
              <b style={{ fontSize: "1.6em", color: "#EDEEE9" }}>
                {" "}
                I’m cooking with heart, because I’m doing it with love and
                adjusting for the tastes of my audience. 🤍{" "}
              </b>
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Heart2;
