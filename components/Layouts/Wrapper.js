// import { animationCreate } from "@/utils/utils";
import React, { useEffect } from "react";
import styles from "@/styles/LandingPage.module.css";
// import BackToTop from "../lib/BackToTop";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

const Wrapper = ({ children }) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     animationCreate();
  //   }, 500);
  // }, []);

  return (
    <>
      <Header />
      {children}
      <Footer />
      {/* <BackToTop /> */}
    </>
  );
};

export default Wrapper;
