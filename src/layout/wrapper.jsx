import React, { useEffect } from "react";
import ScrollToTop from "../hooks/scroll-to-top";
import { animationCreate } from "../utils/utils";
import FloatingContactButton from "./FloatingContact";
 
const Wrapper = ({ children }) => {
  useEffect(() => {
    // animation
    setTimeout(() => {
      animationCreate();
    }, 100);
  }, []);

  return (
    <>
      {children}
      
      <ScrollToTop />
      <FloatingContactButton />

    </>
  );
};

export default Wrapper;
