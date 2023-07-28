import { Fragment, useState } from "react";
import "../../styles/pages/artpieces.css";
import PieceOne from "../../assets/obsession.jpg";
import PieceTwo from "../../assets/project-three.jpg";
import PieceThree from "../../assets/banner-img.jpg";
import PieceFour from "../../assets/modernArt-iii.jpg";
import PieceFive from "../../assets/modernArt-ii.jpg";
import PieceSix from "../../assets/project-two.jpg";
import { BsSuitHeart, BsChatLeft } from "react-icons/bs";
import { Col, Container, Row } from "reactstrap";

const ArtPieces = () => {
  const [pieces, setpieces] = useState([
    {
        img : PieceOne,
      like: "7",
      comment: "5",
      info: "Minus quas quia voluptatum consectetur adipisicing elit.",
    },
    {
        img : PieceTwo,
        like: "6",
        comment: "8",
        info: "Alias aut dicta, dolor eaque fugiat natus nihil numquam.",
      },
      {
        img : PieceThree,
        like: "10",
        comment: "5",
        info: "Alias aut dicta, dolor eaque.",
      },
      {
        img : PieceFour,
        like: "3",
        comment: "2",
        info: "Fugiat natus nihil numquam perferendis porro.",
      },
      {
        img : PieceFive,
        like: "11",
        comment: "5",
        info: "Commodi consequatur dolorum nihil numquam explicabo.",
      },
      {
        img : PieceSix,
        like: "7",
        comment: "4",
        info: "Lorem quas quia voluptatum consectetur adipisicing elit.",
      }
  ]);
  return (
    <Fragment>
      <Container fluid className="artpieces">
        <Row>
          <Col sm={12} className="borderTop"></Col>
          <Col sm={6} className="">
            <h3 className="art-title">
              <strong>ART PIECES</strong>
            </h3>
          </Col>
          <Col sm={6}>
            <a className="link-wrapper" href="#">
              <h3 className="art-title text-end">
                <strong>SEE ALL</strong>
              </h3>
            </a>
          </Col>

          {pieces.map((x, i) => {
            return (
              <Col sm={6} md={3} lg={2} className="item features-image" key={i}>
                <div className="item-wrapper">
                  <a className="item-link" href="#">
                    <img src={x.img} alt="" />
                    <div className="icon-container">
                      <div className="d-flex gap-4">
                        <p className="pt-0">
                          <BsSuitHeart />
                          <span className="ps-1">{x.like}</span>
                        </p>
                        <p className="pt-0">
                          <BsChatLeft />
                          <span className="ps-1">{x.comment}</span>
                        </p>
                      </div>
                    </div>
                    <p className="pt-0 item-text">{x.info}</p>
                  </a>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Fragment>
  );
};

export default ArtPieces;
