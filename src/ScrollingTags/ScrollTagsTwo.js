import React from "react";
import "./ScrollTagsTwo.css";

const ScrollingTagsTwo = () => {
  const speed = 10000;
  const arr = ["Design", "TDD", "Optimization", "Leadership"];
  return (
    <div className="inner">
      <div className="wrapper">
        <div className="sections" style={{ "--speed": `${speed}ms` }}>
          {arr.map((item) => (
            <div style={{ width: "100px" }} className="image">
              <div className="tag">{item}</div>
            </div>
          ))}
        </div>
        <div className="sections" style={{ "--speed": `${speed}ms` }}>
          {arr.map((item) => (
            <div style={{ width: "100px" }} className="image">
              <div className="tag">{item}</div>
            </div>
          ))}
        </div>
        <div className="sections" style={{ "--speed": `${speed}ms` }}>
          {arr.map((item) => (
            <div style={{ width: "100px" }} className="image">
              <div className="tag">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingTagsTwo;
