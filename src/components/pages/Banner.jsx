import { Col, Container, Row } from "reactstrap";
import React, { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import bannerImg from '../../assets/banner-img.jpg'
import '../../styles/pages/banner.css'

const Banner = () => {
        return (
            <Fragment>
                <Container fluid className="banner">
                    <Row>
                        <Col sm={12} lg={6}>
                            <div className="banner-wrapper">
                                <h3 className="sub-title">
                                    <strong>DESCRIPTION BY POWER</strong>
                                </h3>
                                <h2>
                                    Artworks & Exhibitions News
                                </h2>
                                <p className="small-title">
                                    Molestiae neque perspiciatis quidem ut.
                                </p>
                                <div className="pb-3">
                                    <a className="btn secondary-btn me-2" href="#">
                                        <strong>BUY NOW $25</strong>
                                    </a>
                                    <a className="btn main-btn" href="#">
                                        <strong>LIVE DEMO</strong>
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} lg={6}>
                            <img src={bannerImg} alt="banner-img" style={{width: "100%", height: "auto"}} />
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
}

export default Banner;
