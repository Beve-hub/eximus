import Footer from "@/component/layout/Footer";
import Navbar from "@/component/layout/Navbar";
import React from "react";
import AboutContent from "../home/AboutContent";
import TopLayout from "@/component/layout/TopLayout";

const page = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="w-full">
          <TopLayout
            heroTitle="About Us"
            subtitle="Home"
            currentTitle="About Us"
          />
          <div className="max-w-7xl w-full mx-auto">
            <AboutContent />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default page;
