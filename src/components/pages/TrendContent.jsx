import { Component, Fragment } from "react";
import { Card, Col, Row, Container, CardLink, CardImg } from "reactstrap";
import personOne from '../../assets/person1.jpg';
import personTwo from '../../assets/person2.jpg';
import trendContent from '../../assets/top-content.jpg';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../styles/pages/trendcontent.css'

class TrendContent extends Component {

    render(){
        return (
            <Fragment>
                <Container fluid className="trendContent">
                    <Row>
                        <Col sm="12" className="borderTop"></Col>
                        <Col sm={6}>
                            <h3 className="navigator">
                                TREND CONTENT
                            </h3>
                        </Col>
                        <Col sm={6}>
                            
                                <h3 className="navigator text-end">
                                    <a href="#">SEE ALL &rarr;</a>
                                </h3>
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            <Card>
                                <CardLink href="#" className="video-content">
                                    <div className="d-flex justify-content-center">
                                        <iframe title="Video" src="https://player.vimeo.com/video/528176206?h=9344f4d5f6" width="640" height="460"></iframe>
                                    </div>
                                    <h2>
                                        Ipsum magnam non provident, rerum sequi voluptatum. A aspernatur cumque fugit ipsam odio
                                        similique veritatis voluptates voluptatum.
                                    </h2>
                                    <p className="image-caption">
                                        Aliquid aperiam, atque earum eius, eligendi error est eveniet ex expedita explicabo hic
                                        laborum magnam nisi odio possimus, qui quidem ratione sequi.
                                    </p>
                                    <div className="video-content">
                                        <div className="video-wrapper">
                                            <CardImg className="image-icon" src={personOne} alt="" />
                                            <div>
                                                <p className="person-name">
                                                    ROBERT WILSON
                                                </p>
                                                <p>
                                                    Consultant
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </CardLink>
                            </Card>
                        </Col>


            <Col sm={12} md={6} lg={6}>
                <Card>
                    <CardLink href="#" className="image-content">
                        <CardImg src={trendContent} className="image-path mb-4" alt="" />
                        <h2 className="mt-3">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores debitis dolor eum
                            eveniet excepturi fuga. Sapiente sint, sunt ullam.
                        </h2>
                        <p className="image-caption">
                            Fugiat ipsam iusto magnam maiores obcaecati possimus ratione repellendus soluta totam
                            voluptatum. Aliquid consequuntur cumque.
                        </p>
                        <div className="video-container">
                            <div className="video-wrapper">
                                <CardImg className="image-icon" src={personTwo} alt="" />
                                <div>
                                    <p className="person-name">
                                        WILLIAM MITCHELL
                                    </p>
                                    <p>
                                        Manager
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardLink>
                </Card>
            </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default TrendContent