import { Fragment } from "react";
import { Container, Row, Col, NavLink } from "reactstrap";
import "../styles/footer.css";

const Footer = () => {
  return (
    <Fragment>
      <footer>
        <Container fluid className="text-sm-center text-lg-start">
          <Row>
            <Col sm={12} lg={4}>
              <a href="#" className="sub-title">
                Artworks and Exhibition News
              </a>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus architecto est explicabo fugiat in ipsa minus quia
                quis sunt ullam? Consectetur deleniti hic iure minus odio omnis
                provident repellat veniam.
              </p>
            </Col>
            <Col sm={0} lg={1}></Col>
            <Col sm={12} lg={2}>
              <h4>Home</h4>
              <ul>
                <Col lg={12}>
                  <NavLink href="#">ART</NavLink>
                </Col>
                <Col lg={12}>
                  <NavLink href="#">NEWS</NavLink>
                </Col>
                <Col lg={12}>
                  <NavLink href="#">BLOGS</NavLink>
                </Col>
                <Col lg={12}>
                  <NavLink href="#">PRIVACY POLICY</NavLink>
                </Col>
              </ul>
            </Col>
            <Col sm={12} lg={2}>
              <h4>Product</h4>
              <ul>
                <Col lg={12}>
                  <NavLink href="#">HELP</NavLink>
                </Col>
                <Col lg={12}>
                  <NavLink href="#">CONTACTS</NavLink>
                </Col>
                <Col lg={12}>
                  <NavLink href="#">PRODUCTS</NavLink>
                </Col>
                <Col lg={12}>
                  <NavLink href="#">BUY NOW</NavLink>
                </Col>
              </ul>
            </Col>
            <Col sm={12} lg={3}>
              <h4>Social</h4>
              <Row>
                <Col lg={12} className="social">
                  <NavLink href="#">
                    TWITTER <span className="social_badge">35k</span>
                  </NavLink>
                </Col>
                <Col lg={12} className="social">
                  <NavLink href="#">
                    FACEBOOK <span className="social_badge">15k</span>
                  </NavLink>
                </Col>
                <Col lg={12} className="social">
                  <NavLink href="#">
                    INSTAGRAM <span className="social_badge">73k</span>
                  </NavLink>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </footer>
    </Fragment>
  );
};

export default Footer;
