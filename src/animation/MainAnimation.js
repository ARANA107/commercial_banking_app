import React, { useEffect, useRef, useState } from "react";
import "./MainAnimation.css";
export const MainAnimation = () => {
  const images = ["java.png", "db.png", "js.png", "uiux.jpg"];
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [activeTag, setActiveTag] = useState("java.png");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % images.length;
      setCurrentImage(images[index]);
      setActiveTag(images[index]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setActiveTag(null);
    }, 500);
  }, [activeTag]);

  return (
    <div className="container">
      <div
        className={`tag tagAnim tag-top ${
          activeTag === "uiux.jpg" ? "highlight" : ""
        }`}
      >
        UI/UX
      </div>
      <div
        className={`tag tagAnim tag-left ${
          activeTag === "java.png" ? "highlight" : ""
        }`}
      >
        JAVA
      </div>
      <div
        className={`tag tagAnim tag-right ${
          activeTag === "js.png" ? "highlight" : ""
        }`}
      >
        JS
      </div>
      <div
        className={`tag tagAnim tag-bottom ${
          activeTag === "db.png" ? "highlight" : ""
        }`}
      >
        DB
      </div>
      <img
        style={{ position: "absolute", top: "10px", left: "50px" }}
        src="mouse.png"
        alt="Mouse Cursor"
        className="animated-cursor"
      />
      <div className="center-box">
        <img
          style={{ borderRadius: "15px" }}
          src={currentImage}
          height="150px"
          width="150px"
        />
      </div>
    </div>
  );
};
