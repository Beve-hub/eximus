import Footer from "@/component/layout/Footer";
import Navbar from "@/component/layout/Navbar";
import React from "react";
import TopLayout from "@/component/layout/TopLayout";
import Profile from "./component/Profile";
import Company from "./component/Company";
import Value from "./component/Value";

const page = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="w-full ">
          <TopLayout
            heroTitle="About Us"
            subtitle="Home"
            currentTitle="About Us"
          />
          <div className="max-w-7xl w-full mx-auto py-4 px-4 sm:px-6 lg:px-4">
            <Profile />
          </div>
          <div className="w-full mx-auto py-4 bg-[var(--label-fg)] px-4 sm:px-6 lg:px-8">
            <Company />
          </div>
          <div className="max-w-7xl w-full mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <Value />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default page;
