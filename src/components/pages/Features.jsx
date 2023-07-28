import { Fragment, useState } from "react";
import { Component } from "react";
import { Card, Container, Col, Row, CardTitle, CardText } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/pages/features.css";
import { MdOutlineFeaturedPlayList } from "react-icons/md";

const Features = () => {
  const [features, setfeatures] = useState([
    {
      heading: "SUPERIOR ELITE",
      feature: "Distinctio doloribus est maiores",
    },
    {
      heading: "NEW YORK BASED",
      feature: "Creative director got the idea",
    },
    {
      heading: "LEGENDARY ARTIST",
      feature: "Graduate bridges disparate connections",
    },
    {
      icon : <MdOutlineFeaturedPlayList />,
      heading: "COOL MUSEUM",
      feature: "Amet est minus dolores nisi",
    },
  ]);

  return (
    <Fragment>
      <Container fluid className="features">
        <Row>
          <Col sm={12} className="borderTop"></Col>

          {features.map((x, i) => {
            return (
              <Col sm={12} md={6} lg={3} key={i}>
                <Row>
                  <Col sm={2} className="fs-2 p-3">
                    <span>
                      {x.icon }
                    </span>
                  </Col>
                  <Col sm={10}>
                    <Card>
                      <CardTitle className="head-text">{x.heading}</CardTitle>
                      <CardText>{x.feature}</CardText>
                    </Card>
                  </Col>
                </Row>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Fragment>
  );
};

export default Features;
