import LandingPage from "@/components/LandingPage/LandingPage";
import Wrapper from "@/components/Layouts/Wrapper";
import Teams from "@/components/Teams/Teams";
import Contact from "@/components/Contact/Contact";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { push } = useRouter();

  useEffect(() => {
    if (localStorage) {
      if (localStorage.getItem("accessToken")) {
        push("/student");
      }
    }
  }, []);

  return (
    <Wrapper>
      <LandingPage />
      <Teams />
      <Contact />
    </Wrapper>
  );
}
