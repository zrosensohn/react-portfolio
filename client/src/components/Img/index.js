import React from "react";

function Img ({ src, className, alt }) {
  return <img src={src} className = {className} alt={alt} />;
}

export default Img;