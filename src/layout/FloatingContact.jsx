import React, { useState } from "react";
import Link from "next/link";

const FloatingContactButton = () => {
  const [hover, setHover] = useState(false);

  const style = {
    position: "fixed",
    bottom: "120px",
    right: "50px",
    backgroundColor: hover ? "#21E8FE" : "#24A3F2",
    color: "white",
    borderRadius: "50%",
    padding: "16px",
    fontSize: "22px",
    zIndex: 9999,
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
    transition: "background-color 0.3s ease, transform 0.2s ease",
    transform: hover ? "scale(1.05)" : "scale(1)",
    display: "inline-block",
    textAlign: "center",
    lineHeight: "1",
    cursor: "pointer",
  };

  return (
    <Link href="/contact" style={style}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-label="Contact Us"
    >
      <i className="fas fa-envelope"> </i>  
    </Link>
  );
};

export default FloatingContactButton;
