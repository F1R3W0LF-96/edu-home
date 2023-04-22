import Image from "next/image";
import { Inter } from "next/font/google";
import LandingPage from "@/components/LandingPage/LandingPage";
import Wrapper from "@/components/Layouts/Wrapper";
import Teams from "@/components/Teams/Teams";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Wrapper>
      <LandingPage />
      <Teams />
    </Wrapper>
  );
}
