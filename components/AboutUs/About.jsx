import React from "react";
import AboutUsIcon from "./AboutUsIcon";

function About({ ...props }) {
  const style1 =
    "background-image: url('https://source.unsplash.com/random/640x480'); background-position: center center; background-blend-mode: multiply; background-size: cover;";
  return (
    <>
      <div className="bg-transparent py-32" id="about-us">
        <div className="flex flex-wrap justify-center text-center mb-12">
          <div className="w-full lg:w-6/12 px-4">
            <h1 className="text-gray-900 text-4xl font-bold mb-8">About Us</h1>
            <p className="text-gray-700 text-lg font-light">Who we are.</p>
          </div>
        </div>
        <div className="container grid grid-cols-12 mx-auto">
          <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-7 lg:p-10 divide-gray-700 order-2 lg:order-1">
            <div className="pt-6 pb-4 space-y-2">
              <p>
                Affordable education/Teaching at your fingertips - Connecting
                students and teachers for a pocket-friendly fee of{" "}
                <strong>just 19 rupees!</strong>
              </p>
            </div>

            <div className="pt-6 pb-4 space-y-2">
              <p>
                Unleash academic excellence and financial success - THE platform
                drives students towards top marks while empowering teachers to
                unlock their true earning potential!
              </p>
            </div>
            <div className="pt-6 pb-4 space-y-2">
              <p>
                We offer an extensive and authentic database of tutors and
                students from around the world
              </p>
            </div>
            <div className="pt-6 pb-4 space-y-2">
              <p>
                Unlock the power of personalized learning - Our platform offers
                expertly curated matches, connecting students and teachers in a
                transformative educational partnership!
              </p>
            </div>
            <div className="pt-6 pb-4 space-y-2">
              <p>
                Seamless learning on your terms - The platform provides flexible
                options, delivering services to your doorstep or through an
                online connection, creating a truly convenient experience for
                tutors and students!
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center col-span-12 lg:col-span-5 lg:h-auto align-middle bg-no-repeat bg-cover dark:bg-gray-700 order-1 lg:order-2">
            <div className="flex flex-col items-center p-8 py-12 text-center">
              <AboutUsIcon />
            </div>
          </div>
        </div>
      </div>
      <section></section>
    </>
  );
}

export default About;
