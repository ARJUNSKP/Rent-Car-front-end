import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Header from './Component/Header'
import Footer from './Component/Footer'
import aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react';
import Carinformation from './page/Carinformation';
import Addcar from './page/Addcar'
import SingleView from './page/SingleView'
import AddEnquery from './page/AddEnquery'
import Protected from './Protact/Protected';

function App() {

  useEffect(()=>{
    aos.init({easing:"linear"})
  },[])
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/carinfo/:carBrant' element={<Carinformation></Carinformation>}/>
        <Route path='/addCar' element={<Addcar></Addcar>}/>
        <Route path='/SingleView/:carId' element={<SingleView></SingleView>}/>
        <Route path='/allEnquiry' element={<AddEnquery></AddEnquery>}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
