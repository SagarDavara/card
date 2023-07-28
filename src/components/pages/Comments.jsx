import { React, Fragment, useState } from "react";
import "../../styles/pages/comments.css";
import { Container, Row, Col } from "reactstrap";

const Comments = () => {
  const [comments, setcomments] = useState([
    {
      date: "03, 2022",
      comment:
        "Consectetur adipisicing elit. Accusamus accusantium, alias assumenda atque dolor dolore minima odit praesentium repudiandae.",
    },
    {
      date: "10, 2022",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit Consequuntur doloribus enim esse iusto laudantium magni maxime minima.",
    },
    {
      date: "12, 2022",
      comment:
        "Consectetur adipisicing elit. Accusamus accusantium, alias assumenda atque dolor dolore minima odit praesentium repudiandae.",
    },
    {
      date: "21, 2022",
      comment:
        "Quaerat quo ratione velit. Ad deserunt dolor harum odio officiis quaerat? Atque eveniet impedit laboriosam quae, qui quod.",
    },
  ]);
  return (
    <Fragment>
      <Container fluid className="comments">
        <Row>
          <Col sm={12} className="borderTop"></Col>
          <Col sm={12} lg={6}>
            <p className="comment-title">
              <strong>COMMENTS</strong>
            </p>
          </Col>
          <Col sm={12} lg={6} className="text-end">
            <p className="comment-title">
              <strong>SEEL ALL</strong>
            </p>
          </Col>

          {comments.map((x, i) => {
            return (
              <Col sm={12} md={6} lg={3} key={i}>
                <div className="d-flex gap-2">
                  <p className="comment-date">
                    SEPTEMBER <small>{x.date}</small>
                  </p>
                  <p className="comment-dot">.</p>
                  <p className="your-comment">YOUR COMMENT</p>
                </div>
                <p className="public-comment">
                  {x.comment}
                </p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Fragment>
  );
};

export default Comments;
