import { Component, Fragment } from "react";
import "../../styles/pages/modernart.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
import { Col, Row } from "reactstrap";
import ModerArt_i from "../../assets/project-two.jpg";
import ModerArt_ii from "../../assets/modernArt-ii.jpg";
import ModerArt_iii from "../../assets/modernArt-iii.jpg";

class ModernArt extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Fragment>
        <Container fluid className="modernArt">
          <Row>
            <Col sm={12} className="borderTop"></Col>
            <Col sm={12} lg={6}>
              <h3>
                Modern Art <span>Installations</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci animi et eum ipsum iste obcaecati quaerat voluptate.{" "}
                <br /> Architecto asperiores assumenda, dignissimos dolor.
              </p>
            </Col>
            <Col sm={12} lg={6} className="ps-0">
              <Row>
                <Col sm={4} className="d-flex flex-column align-content-between justify-content-between">
                  <img
                    src={ModerArt_i}
                    alt=""
                    style={{
                      width: "100%"
                    }}
                  />
                  <img src={ModerArt_ii} alt="" style={{ width: "100%"}} />
                </Col>
                <Col sm={8}>
                  <img
                    src={ModerArt_iii}
                    alt=""
                    style={{ width: "100%", objectFit: "fill"}}
                  />
                </Col>
              </Row>
            </Col>
            <Col className="borderBottom"></Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default ModernArt;
