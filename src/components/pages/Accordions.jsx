import React, { useState } from "react";
import "../../styles/pages/accordions.css";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Container,
  Row,
  Col,
} from "reactstrap";

const Accordions = () => {
  const [open, setOpen] = useState("");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  const [array, setarray] = useState([
    {
      title:
        "Numquam odit pariatur praesentiumquam,quasi quibusdam quisquam unde velit?",
      data: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolores, exercitationem facere, in ipsum iusto natus necessitatibus neque numquam odit pariatur praesentium quam, quasi quibusdam quisquam unde velit. Corporis, ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus facilis neque quisquam sequi tempore. Aliquid animi deleniti dolorum eaque expedita id inventore, libero nemo provident quibusdam sed sequi unde voluptas."
    },
    {
      title:
        "Numquam odit pariatur praesentiumquam,quasi quibusdam quisquam unde velit?",
      data: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolores, exercitationem facere, in ipsum iusto natus necessitatibus neque numquam odit pariatur praesentium quam, quasi quibusdam quisquam unde velit. Corporis, ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus facilis neque quisquam sequi tempore. Aliquid animi deleniti dolorum eaque expedita id inventore, libero nemo provident quibusdam sed sequi unde voluptas."
    },
    {
      title:
        "Numquam odit pariatur praesentiumquam,quasi quibusdam quisquam unde velit?",
      data: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolores, exercitationem facere, in ipsum iusto natus necessitatibus neque numquam odit pariatur praesentium quam, quasi quibusdam quisquam unde velit. Corporis, ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus facilis neque quisquam sequi tempore. Aliquid animi deleniti dolorum eaque expedita id inventore, libero nemo provident quibusdam sed sequi unde voluptas."
    },
    {
      title:
        "Numquam odit pariatur praesentiumquam,quasi quibusdam quisquam unde velit?",
      data: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolores, exercitationem facere, in ipsum iusto natus necessitatibus neque numquam odit pariatur praesentium quam, quasi quibusdam quisquam unde velit. Corporis, ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus facilis neque quisquam sequi tempore. Aliquid animi deleniti dolorum eaque expedita id inventore, libero nemo provident quibusdam sed sequi unde voluptas."
    },
    {
      title:
        "Numquam odit pariatur praesentiumquam,quasi quibusdam quisquam unde velit?",
      data: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolores, exercitationem facere, in ipsum iusto natus necessitatibus neque numquam odit pariatur praesentium quam, quasi quibusdam quisquam unde velit. Corporis, ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus facilis neque quisquam sequi tempore. Aliquid animi deleniti dolorum eaque expedita id inventore, libero nemo provident quibusdam sed sequi unde voluptas."
    },
  ]);
  return (
    <Container fluid className="questions">
      <Row>
        <Col sm={12} lg={6}>
          <h1>Frequently asked Questions</h1>
        </Col>
        <Col sm={12} lg={6}>
          <p className="sub-title pt-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            animi et eum ipsum iste obcaecati quaerat voluptate.
          </p>
        </Col>
        <Col sm={12}>
          <Accordion flush open={open} toggle={toggle}>
            {array.map((x, i) => {
              console.log();
              return (
                <AccordionItem className="AccordionHeader" key={i}>
                  <AccordionHeader targetId={i + 1}>{x.title}</AccordionHeader>
                  <AccordionBody accordionId={i + 1}>{x.data}</AccordionBody>
                </AccordionItem>
              );
            })}
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default Accordions;
