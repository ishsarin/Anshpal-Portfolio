import React from "react";

const Background = ({ count }) => {
  return count === 1 ? (
    <div className="parallax" />
  ) : (
    <div className="parallax2" />
  );
};

export default Background;
