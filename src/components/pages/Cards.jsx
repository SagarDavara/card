import { React, Fragment, Component } from "react";
import "../../styles/pages/cards.css";
import { Container, Row, Col, Card, CardImg, CardText } from "reactstrap";
import cardImgOne from "../../assets/modernArt-iii.jpg";
import cardImgTwo from "../../assets/modernArt-ii.jpg";
import cardImgThree from "../../assets/project-one.jpg";
// import "bootstrap/dist/css/bootstrap.min.css";

class Cards extends Component {

  constructor() {
    super()

    this.state = {
      array : [
        {
          img: cardImgOne,
          date: '05, 2022',
          data: 'Adipisci aperiam at autem commodi cumque eligendi eos.'
        },
        {
          img: cardImgTwo,
          date: '07, 2022',
          data: 'Consectetur adipisicing elit architecto dignissimos.'
        },
        {
          img: cardImgThree,
          date: '09, 2022',
          data: 'Dolor sit amet, consectetur adipisicing elit.'
        }
      ]
    }
  }
  render() {
    return (
      <Fragment>
        {/* <Container> */}
          <div className="cards">
            <Row>
              {
                this.state.array.map((x, i) => {
                  return (
                    <Col sm={12} lg={4} key={i}>
                      <Card
                        className="ms-4"
                        style={{
                          width: "27rem",
                        }}
                      >
                        <CardImg src={x.img} />
                        <CardText>
                          <div className="d-flex gap-4">
                            <p className="sub-title">
                              NOVEMBER <small>{x.date}</small>
                            </p>
                            <p className="comment">YOUR COMMENT</p>
                          </div>
                          <p className="card-info">
                            {x.data}
                          </p>
                        </CardText>
                      </Card>
                    </Col>
                  )
                })
              }
            </Row>
          </div>
        {/* </Container> */}
      </Fragment>
    );
  }
}

export default Cards;
