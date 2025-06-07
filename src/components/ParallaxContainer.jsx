import React from "react";
import { useParallax } from "../hooks/useParallax";
import "./css/ParallaxContainer.css";

const ParallaxContainer = ({
  children,
  speed = 0.5,
  offset = 0,
  className = "",
  style = {},
}) => {
  const { transform, elementRef } = useParallax(speed, offset);

  return (
    <div
      ref={elementRef}
      className={`parallax-container ${className}`}
      style={{
        transform,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxContainer;
