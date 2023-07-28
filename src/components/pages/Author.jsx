import { React, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/pages/author.css";
import personTwo from '../../assets/person2.jpg';
import topContent from '../../assets/top-content.jpg';
import rightTopImage from '../../assets/modernArt-ii.jpg'
import rightBottomImage from '../../assets/project-three.jpg'


const Author = () => {

        return (
            <Fragment>
                <Container fluid className="author">
                    <Row>
                        <Col sm={12} className="borderTop"></Col>
                        <Col sm={12} lg={6}>
                            <h3 className="navigator mb-4">AUTHOR</h3>
                        </Col>
                        <Col sm={12} lg={6}>
                            <h3 className="navigator text-end mb-4"><a href="#">SEE ALL &rarr;</a></h3>
                        </Col>
                        <Col sm={12} lg={3}>
                            <div className="author-container">
                                <div className="author-wrapper">
                                    <p className="sub-title">
                                        <strong>SIMPLE</strong>
                                    </p>
                                    <p className="author-dot">
                                        <strong>·</strong>
                                    </p>
                                    <p className="author-text">
                                        BEAUTY
                                    </p>
                                    <p className="author-dot">
                                        <strong>·</strong>
                                    </p>
                                    <p className="author-text">
                                        6K MAX VIEWS
                                    </p>
                                </div>
                            </div>
                            <div className="person-container">
                                <div className="person-wrapper">
                                    <img src={personTwo} className="image-icon img-fluid" alt="person" />
                                    <div className="person-text ps-3">
                                        <p className="p-0 m-0 fs-6">
                                            STEVE QUINN
                                        </p>
                                        <p className="p-0 m-0">
                                            Painter
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} sm={12} className="mt-4">
                            <h2 className="consectetur">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Asperiores debitis dolor eum eveniet excepturi fuga.
                            </h2>
                            <p className="aperiam">
                                Aliquid aperiam, atque earum eius, eligendi error est eveniet ex
                                expedita explicabo hic laborum magnam nisi odio possimus, qui
                                quidem ratione sequi.
                            </p>
                        </Col>
                        <Col sm={12} lg={3}>
                            <div className="text-end">
                                <p className="author-text">NOVEMBER <small>02, 2022</small></p>
                            </div>
                            <div className="image-wrapper d-flex justify-content-end">
                                <a href="#" className="d-block pe-4"><img src={topContent} height="160px" alt="" /></a>
                                <div className="d-flex flex-column justify-content-between">
                                    <a href="#" className="d-block pb-2"><img src={rightTopImage} alt="" style={{height: "70px",width: "80px"}} /></a>
                                    <a href="#" className="d-block pt-2"><img src={rightBottomImage} alt="" style={{height: "70px",width: "80px"}} /></a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
};

export default Author;
