import React, { useState } from "react";
import Link from "next/link";

const SideFloatingContactButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const containerStyle = {
    position: "fixed",
    top: "70%",
    right: "0",
    zIndex: 1000,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    transition: "all 0.3s ease",
  };

  const tabStyle = {
    backgroundColor: "#21E8FE",
    color: "#fff",
    padding: "10px 8px",
    writingMode: "vertical-rl",
    textOrientation: "mixed",
    fontWeight: "bold",
    borderTopLeftRadius: "8px",
    borderBottomLeftRadius: "8px",
    cursor: "pointer",
  };

  const revealButtonStyle = {
    marginRight: "-3px",
    padding: "10px 16px",
    backgroundColor: "#fff",
    color: "#000",
    borderRadius: "8px",
    textDecoration: "none",
    border:" 1px solid black",
    whiteSpace: "nowrap",
    transform: isHovered ? "translateX(0)" : "translateX(100%)",
    opacity: isHovered ? 1 : 0,
    transition: "all 0.3s ease",
  };

  return (
    <div
      style={containerStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Reveal Button */}
      {/* <Link href="/contact"> */}
        <a style={revealButtonStyle}>Contact Us</a>
      {/* </Link> */}

      {/* Side Tab */}
      <div style={tabStyle}>CONTACT NOW</div>
    </div>
  );
};

export default SideFloatingContactButton;
