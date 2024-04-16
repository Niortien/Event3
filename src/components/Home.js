import React from "react";
import Introduction from "./Introduction";
import Carousel from './Carousel'
import ServiceElements from "./ServiceElements";
import Galeries from './Galeries'
function Home() {
  return (
    <>
<Carousel />

<main id="main" style={{ backgroundColor: '', }}>
  {/* ======= Get Started Section ======= */}
  <Introduction />
  {/* ======= Constructions Section ======= */}
 
  {/* ======= Services Section ======= */}
 <ServiceElements />
  {/* ======= Features Section ======= */}
 
  {/* ======= Our Projects Section ======= */}
  <Galeries />

  {/* ======= Testimonials Section ======= */}
  
  {/* ======= Recent Blog Posts Section ======= */}
  
  {/* End Recent Blog Posts Section */}
</main>{/* End #main */}

</>
  );
}

export default Home;
