
import './App.css';
import Herosection from './component/Herosection';
import Navbar from './component/Navbar';
import SwipperSection from './component/SwipperSection'
import React,{useEffect} from 'react'
import MainSection from './component/MainSection';
import Footer from './component/Footer';

function App() {

  useEffect(() => {
    window.AOS.init({ // Initialization of aos library
      
    });
  });

  return (
    <div className="App">
      <Navbar/>
      <Herosection/>
      <SwipperSection/>
      <MainSection/>
      <Footer/>
    </div>
  );
}

export default App;
