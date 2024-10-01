// App.jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import StoreIntegration from './components/StoreIntegeration';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <StoreIntegration/>
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
