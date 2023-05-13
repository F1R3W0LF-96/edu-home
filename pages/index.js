import LandingPage from "@/components/LandingPage/LandingPage";
import Wrapper from "@/components/Layouts/Wrapper";
import Teams from "@/components/Teams/Teams";
import Contact from "@/components/Contact/Contact";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import locationImg from "../public/Images/location.png";

export default function Home() {
  const { push } = useRouter();
  const [currentLocation, setCurrentLocation] = useState([]);

  const [location, setLocation] = useState();

  const fetchApiData = async ({ latitude, longitude }) => {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
    );
    const data = await res.json();
    debugger;
    if (data.address) setCurrentLocation(data.address);
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
      <div className="flex justify-end">
        {currentLocation && (
          <>
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
              title={`${currentLocation?.suburb},${currentLocation?.town}`}
            >
              <Image src={locationImg} width={20} alt="logo" />
              {currentLocation.suburb},{currentLocation.town}
            </span>
          </>
        )}
      </div>
      <Wrapper>
        <LandingPage />
        <Teams />
        <Contact />
      </Wrapper>
    </>
  );
}
