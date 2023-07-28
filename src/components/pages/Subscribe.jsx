import { React, Fragment, Component } from "react";
import { Container, Row, Col, Form } from "reactstrap";
import '../../styles/pages/subscribe.css'

class Subscribe extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid className="subscribe">
                    <Row>
                        <Col sm={12}>
                                <h5>START TO OUR CONNECT</h5>
                        </Col>
                        <Col sm={12} md={6}>
                                <h3>You confirm that you have read and <br/>
                                    are agreeing to our terms of use  <br/>
                                    regarding the storage of the data.
                                </h3>
                        </Col>
                        <Col sm={12} md={6}>
                            <Form className="form">
                                <div>
                                    <input type="email" name="Email" id="em" placeholder="enter email" className="form-control" />
                                </div>
                                <div className="d-flex gap-2">
                                    <input type="checkbox" className="form-check-input" id="checkbox" />
                                    <label htmlFor="checkbox" className="form-check-label"> Accusamus consequuntur
                                    culpa deleniti esse eveniet, itaque neque, porro, sed sit totam ullam unde veritatis
                                    voluptatem. Accusantium ea quia.</label>
                                </div>
                                <div className="text-center mt-2">
                                <button className='main-btn text-center'>SUBSCRIBE</button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Subscribe;