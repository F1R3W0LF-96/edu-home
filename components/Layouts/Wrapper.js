// import { animationCreate } from "@/utils/utils";
import React, { useEffect, useState } from "react";
import styles from "@/styles/LandingPage.module.css";
// import BackToTop from "../lib/BackToTop";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import useAuthentication from "@/hooks/useAuthentication";
const Wrapper = ({ children }) => {
  const { isAuthenticated } = useAuthentication();
  const [os, setOS] = useState("window");
  useEffect(() => {
    // setTimeout(() => {
    //   animationCreate();
    // }, 500);
    const _os = window.navigator.userAgent;
    if (_os.toLowerCase().includes("android")) {
      setOS("android");
    } else if (_os.toLowerCase().includes("ios")) {
      setOS("ios");
    } else {
      setOS("window");
    }
  }, []);

  return (
    <>
      <Header isAuthenticated={isAuthenticated} os={os} />
      {children}
      <Footer />
      {/* <BackToTop /> */}
    </>
  );
};

export default Wrapper;
