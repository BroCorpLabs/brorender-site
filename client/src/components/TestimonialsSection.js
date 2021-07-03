import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import Avatar from "./Avatar";

function TestimonialsSection(props) {
  const items = [
    {
      avatar: "https://uploads.divjoy.com/pravatar-150x-5.jpeg",
      name: "Sarah Kline",
      testimonial:
        "We use BroRender to save a lot of time while fine-tuning our 3D scenes.",
      company: "Rikoso Modelworks",
    },
    {
      avatar: "https://uploads.divjoy.com/pravatar-150x-48.jpeg",
      name: "Shawna Murray",
      testimonial:
        "Thanks to BroRender, my team no longer needs powerful gaming PCs just to render their models!",
      company: "Balena Architecture",
    },
    {
      avatar: "https://uploads.divjoy.com/pravatar-150x-12.jpeg",
      name: "Blake Elder",
      testimonial:
        "The distributed render feature is much faster while designing cutscenes than our in-house render farm.",
      company: "Red Gaming",
    },
  ];

  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
          className="text-center"
        />
        <Row className="justify-content-center">
          {items.map((item, index) => (
            <Col xs={12} md={4} className="py-3" key={index}>
              <Card>
                <Card.Body className="p-4">
                  <Card.Text>"{item.testimonial}"</Card.Text>
                  <Media className="align-items-center mt-auto">
                    <Avatar src={item.avatar} alt={item.name} size="56px" />
                    <Media.Body className="ml-2">
                      <h6 className="font-weight-bold mb-0">{item.name}</h6>
                      <small>{item.company}</small>
                    </Media.Body>
                  </Media>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
}

export default TestimonialsSection;
