import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import { Link } from "./../util/router.js";
import "./Footer.scss";

function Footer(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      className="footer"
    >
      <Container>
        <div className="FooterComponent__inner">
          <div className="brand left">
            <Link to="/">
              <img src={props.logo} alt="Logo" />
            </Link>
          </div>
          <div className="links right">
            <a
              target="_blank"
              href="https://brocorp.site"
              rel="noopener noreferrer"
            >
              Contact
            </a>
            <a
              target="_blank"
              href="https://brocorp.site"
              rel="noopener noreferrer"
            >
              Blog
            </a>
            <Link to="/privacy">Privacy</Link>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div
              className="links center"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontSize: 10,
              }}
            >
              powered by
              <a
                target="_blank"
                href="https://brocorp.site"
                rel="noopener noreferrer"
              >
                <img
                  src={props.bclogo}
                  style={{ width: 170, filter: "invert(1)", marginTop: -10 }}
                  alt="brocorp"
                />
              </a>
            </div>
            <div
              className="links center"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontSize: 10,
              }}
            >
              built with
              <a
                target="_blank"
                href="https://brocorp.site"
                rel="noopener noreferrer"
              >
                <img
                  src={props.pclogo}
                  style={{ width: 130, marginTop: 10, marginLeft: 20 }}
                  alt="pachyderm"
                />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Footer;
