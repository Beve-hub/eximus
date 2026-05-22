import Footer from "@/component/layout/Footer";
import Navbar from "@/component/layout/Navbar";
import TopLayout from "@/component/layout/TopLayout";
import StrategyComponent from "./component/StrategyComponent";


const page = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="w-full">
          <TopLayout
            heroTitle="Services"
            subtitle="Home"
            currentTitle="Services"
          />
          <div className="max-w-7xl w-full mx-auto py-4 px-4 sm:px-6 lg:px-4">
            <StrategyComponent/>
          </div>
          
        </main>

        <Footer />
      </div>
    </>
  );
};

export default page;
