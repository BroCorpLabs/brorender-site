import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";

function HeroSection(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className="text-center">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={1}
          spaced={true}
        />

        {/* <LinkContainer to={props.buttonPath}>
          <Button variant={props.buttonColor} size="lg">
            {props.buttonText}
          </Button>
        </LinkContainer> */}
      </Container>
    </Section>
  );
}

export default HeroSection;
