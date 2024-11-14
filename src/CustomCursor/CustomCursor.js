import React, { useEffect, useState } from "react";

const CustomCursor = ({
  cursorPosition,
  isCursorVisible,
  setCursorPosition,
}) => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    if (isCursorVisible) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isCursorVisible]);

  return (
    <div
      className="customCursor"
      style={{
        left: `${cursorPosition.x}px`,
        top: `${cursorPosition.y}px`,
        opacity: isCursorVisible ? 1 : 0, // Hide cursor if not visible
      }}
    ></div>
  );
};

export default CustomCursor;
