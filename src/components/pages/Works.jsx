import "../../styles/pages/works.css";
import { Fragment, useState } from "react";
import {
  Col,
  Container,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import projectOne from "../../assets/project-one.jpg";
import projectTwo from "../../assets/project-two.jpg";
import projectThree from "../../assets/project-three.jpg";
import projectFour from "../../assets/banner-img.jpg";

const Works = () => {
  const [works, setworks] = useState([
    {
      img : projectOne,
      title : 'Photographer Creates'
    },
    {
      img : projectTwo,
      title : 'Amazing Installable'
    },
    {
      img : projectThree,
      title : 'Take Charge'
    },
    {
      img : projectFour,
      title : 'Most Creative'
    },
  ]);

  return (
    <Fragment>
      <Container fluid className="works">
        <Row>
          <Col sm={12} lg={12}>
            <h3 className="sub-title pb-5 p-lg-0">
              <strong>WORKS</strong>
            </h3>
          </Col>
          <Col sm={12} lg={6}>
            <h2>Our Main Projects</h2>
          </Col>
          <Col sm={12} lg={6}>
            <p className="small-title py-0 py-sm-3">
              Animi commodi enim eveniet excepturi.
            </p>
          </Col>
        </Row>
        <Row>
          
          {works.map((x, i) => {
            return (
              <Col sm={12} md={6} key={i}>
                <Card>
                  <img
                    alt="project-one"
                    src={x.img}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <CardBody>
                    <CardTitle tag="h5">DESIGN</CardTitle>
                    <CardText>{x.title}</CardText>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
          
        </Row>
      </Container>
    </Fragment>
  );
};

export default Works;
