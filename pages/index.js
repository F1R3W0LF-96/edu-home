import LandingPage from "@/components/LandingPage/LandingPage";
import Hero from "@/components/Hero/Hero";
import Wrapper from "@/components/Layouts/Wrapper";
import Teams from "@/components/Teams/Teams";
import Contact from "@/components/Contact/Contact";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import locationImg from "../public/Images/location.png";
import BarLoader from "react-spinners/BarLoader";
import About from "@/components/AboutUs/About";
import HeroSection from "@/components/Hero/HeroSection";

export default function Home() {
  const { push } = useRouter();
  const [currentLocation, setCurrentLocation] = useState([]);
  const [location, setLocation] = useState();
  const [fetchLocation, setFetchLocation] = useState(false);

  const fetchApiData = async ({ latitude, longitude }) => {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
    );
    const data = await res.json();
    if (data.address) setCurrentLocation(data.address);
    setFetchLocation(false);
  };
  useEffect(() => {
    if ("geolocation" in navigator) {
      // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        setLocation({ latitude, longitude });
      });
    }
  }, []);
  useEffect(() => {
    // Fetch data from API if `location` object is set
    if (location) {
      setFetchLocation(true);
      fetchApiData(location);
    }
  }, [location]);

  useEffect(() => {
    if (localStorage) {
      if (localStorage.getItem("accessToken")) {
        push("/student");
      }
    }
  }, []);

  return (
    <>
      {/* <div className="flex justify-end">
        {currentLocation && (
          <>
            {fetchLocation ? (
              <BarLoader
                // color={color}
                loading={true}
                size={15}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              <span
                style={{
                  // maxWidth: "200px",
                  marginRight: "20px",
                  wordBreak: "break-word",
                  display: "flex",
                  whiteSpace: "nowrap",
                  fontSize: "12px",
                  // overflow: "hidden !important",
                  alignItems: "center",

                  // textOverflow: "ellipsis",
                }}
                title={`${
                  currentLocation?.suburb || currentLocation?.residential
                },${currentLocation?.town || currentLocation?.state_district}`}
              >
                <Image src={locationImg} width={20} alt="logo" />
                {`${currentLocation?.suburb || currentLocation?.residential},${
                  currentLocation?.town || currentLocation?.state_district
                }`}
              </span>
            )}
          </>
        )}
      </div> */}
      <Wrapper>
        <HeroSection />
        {/* <Hero /> */}
        <About />
        <Teams />
        <Contact />
      </Wrapper>
      <ToastContainer />
    </>
  );
}
