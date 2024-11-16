import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ScrollingTags from "ScrollingTags/ScrollingTags";
import ScrollTagsTwo from "ScrollingTags/ScrollTagsTwo";
import CustomizedTimeline from "TimeLine/CustomizedTimeline";
import { MainAnimation } from "animation/MainAnimation";
import { mainHeading } from "constants";
import CustomCursor from "CustomCursor/CustomCursor";

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isCursorVisible, setIsCursorVisible] = useState(true);

  return (
    <Container
      fluid="md"
      className="cursorHidden top-height"
      onMouseEnter={() => setIsCursorVisible(true)}
      onMouseLeave={() => setIsCursorVisible(false)}
    >
      <CustomCursor
        isCursorVisible={isCursorVisible}
        setCursorPosition={setCursorPosition}
        cursorPosition={cursorPosition}
      />
      <Row>
        <Col
          xs={6}
          style={{ paddingLeft: "40px", marginBottom: "40px" }}
          className="justify-content-xs-center"
        >
          <p className="white-text ">Hey there!</p>
          <h1
            className="white-text"
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontWeight: 700,
              lineHeight: "70px",
            }}
          >
            {mainHeading}
          </h1>
          <p className="white-text">Available to connect (NY, USA)</p>
        </Col>
        <Col xs={6} className="white-text d-flex justify-content-center">
          <MainAnimation />
        </Col>
      </Row>
      <Row className="g-0">
        <Col xs={4} className="white-text">
          <div className="timeline-container">
            <h2 className="timeline-title">
              Experience <span className="years">(07 Years)</span>
            </h2>
            <CustomizedTimeline />
          </div>
        </Col>
        <Col xs={4} className="d-flex justify-content-center">
          <Row style={{ width: "100%" }}>
            <Col
              xs={12}
              style={{ marginBottom: "10px" }}
              className="d-flex justify-content-center"
            >
              <div className="timeline-container">
                <h2 className="timeline-title">Skills and expertise</h2>
                <ScrollingTags />
                <ScrollTagsTwo />
              </div>
            </Col>
            <Col xs={12} className="d-flex justify-content-center">
              <div className="timeline-container">
                <h2 className="timeline-title">Tech stack</h2>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <img
                    className="tech-skills-logo"
                    src="react.png"
                    alt="react"
                  />
                  <img
                    className="tech-skills-logo"
                    src="spring.jpg"
                    alt="spring"
                  />
                  <img className="tech-skills-logo" src="sql.jpg" alt="sql" />
                  <img
                    className="tech-skills-logo"
                    src="figma.webp"
                    alt="figma"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col className="d-flex justify-content-center">
          <div className="timeline-container">
            <h2 className="timeline-title">Lets connect</h2>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
