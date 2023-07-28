import { Fragment } from "react";
import { Component } from "react";
import { Card, CardText, CardTitle, Col, Container, Row } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/pages/latestPost.css'

class LatestPost extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid className="latestpost">
          <Row>
            <Col sm={12} lg={12}>
              <h3 className="sub-title">
                <strong>LATEST POST</strong>
              </h3>
            </Col>
            <Col sm={12} lg={12}>
              <h2 className="pb-5">Most Creative Art</h2>
            </Col>
            <hr />
            <Col sm={12} lg={6}>
              <p className="post-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />{" "}
                Adipisci animi et eum ipsum iste obcaecati quaerat voluptate.{" "}
                <br /> <br /> Architecto asperiores assumenda, dignissimos
                dolor.
              </p>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Card>
                <CardTitle tag="h4">
                  Understand the <span className="post_title">World</span>
                </CardTitle>
                <CardText>
                  Architecto asperiores assumenda, dignissimos dolor.
                </CardText>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Card>
                <CardTitle tag="h4">
                  Art and the <span className="post_title">Process</span>
                </CardTitle>
                <CardText>
                  Reprehenderit saepe sunt tempore totam veniam vero voluptate
                  inventore.
                </CardText>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default LatestPost;
