import Footer from '@/component/layout/Footer';
import Navbar from '@/component/layout/Navbar';
import React from 'react'



const page = () => {
    return (
         <>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1 max-w-7xl mx-auto px-4 py-16 w-full">
          <div className="text-center">
            
          </div>
        </main>

        <Footer />
      </div>
    </>
    )
}

export default page
