import React from "react";
import "./ScrollingTags.css";

const ScrollingTags = () => {
  const speed = 10000;
  const arr = ["React", "SpringBoot", "Mongo", "MySql"];
  return (
    <div className="inner">
      <div className="wrapper">
        <section style={{ "--speed": `${speed}ms` }}>
          {arr.map((item) => (
            <div style={{ width: "100px" }}>
              <div className="tag">{item}</div>
            </div>
          ))}
        </section>
        <section style={{ "--speed": `${speed}ms` }}>
          {arr.map((item) => (
            <div style={{ width: "100px" }}>
              <div className="tag">{item}</div>
            </div>
          ))}
        </section>
        <section style={{ "--speed": `${speed}ms` }}>
          {arr.map((item) => (
            <div style={{ width: "100px" }}>
              <div className="tag">{item}</div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ScrollingTags;
