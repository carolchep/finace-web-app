import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Motion from '../components/motion';

const Home = () => {
  return (
    <div className="font-raleway text-textg font-medium min-h-screen leading-6 font-sans text-base leading-relaxed">
      <Header />
      <Motion/>
      <Footer />
    </div>
  );
}

export default Home;
