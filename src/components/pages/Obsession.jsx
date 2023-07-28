import { React, Fragment, Component } from "react";
import "../../styles/pages/obsession.css";
import obsessionImg from "../../assets/obsession.jpg";
import { Container, Row, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

class Obsession extends Component {
  render(){
    return (
      <Fragment>
        <Container fluid className="obsession">
          <Row>
            <Col sm={12} className="borderTop"></Col>
            <Col sm={12} lg={3}>
              <div className="d-flex">
                <p className="sub-title"><strong>OBSESSION</strong></p>
                <p className="obsession-dot">
                  <strong>·</strong>
                </p>
                <p className="obsession-text">ETERNAL</p>
                <p className="obsession-dot">
                  <strong>·</strong>
                </p>
                <p className="obsession-text">25k VIEWS</p>
              </div>
            </Col>
            <Col sm={12} lg={6}>
              <div className="consectetur">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Asperiores debitis dolor eum eveniet excepturi fuga.
              </div>
            </Col>
  
            <Col sm={12} lg={3}>
              <div className="date-wrapper text-end">
                <p>NOVEMBER <small>17, 2022</small></p>
              </div>
              <div className="image-wrap text-end">
                <a href="#" className="img-link"><img src={obsessionImg} alt="" className="" /></a>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
};

export default Obsession;
