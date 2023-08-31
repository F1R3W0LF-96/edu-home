// import { animationCreate } from "@/utils/utils";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import BackToTop from "../lib/BackToTop";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import useAuthentication from "@/hooks/useAuthentication";
import Whatsapp from "../Widgets/Whatsapp";

const Wrapper = (props) => {
  const state = useSelector((state) => state);
  console.log(state, ":::: persisted state ::::");
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
      <Header
        isAuthenticated={isAuthenticated}
        os={os}
        userState={state.user}
      />
      {props.children}
      <Footer />
      <Whatsapp />
      <div className="whatsapp-widget"></div>
      {/* <BackToTop /> */}
    </>
  );
};

export default Wrapper;
