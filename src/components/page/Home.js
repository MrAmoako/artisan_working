import React from 'react'
import Dashboard from '../actualcomp/Dashboard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import image1 from "../images/back3.jpg"
import image3 from "../images/back3.avif";
import Footer from '../actualcomp/footer';
// import image4 from "../images/background.jpg";
// import image5 from "../images/plumber.avif";

function Home() {


  return (
    <div >
    <Dashboard />
    <Footer />
  </div>
  )
}

export default Home