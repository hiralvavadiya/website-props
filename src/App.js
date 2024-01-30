import './App.css';
import React from 'react';
import Home from './Component/Home';
import Footer from './Component/Footer';
import { Route, Routes } from 'react-router-dom';
import Elements from './Component/Elements';
import Blog from './Component/Blog';
import Pages from './Component/Pages';
import Portfolio from './Component/Portfolio';
import Shop from './Component/Shop';
import Header from './Component/Header';
import { BsFillBagDashFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { FaCoffee } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const counter=[
  {no:320,icon:<BsFillBagDashFill />,data:"Projects Done"},
  {no:350,icon:<FaHeart />,data:"Happy Clients"},
  {no:933,icon:<FaCoffee />,data:"Coffee Cups"},
  {no:975,icon:<FaLightbulb />,data:"Great Ideas"},
]
const footerData=[
  {icon:<IoCall />,title:"Call Us",data:"+61 383 767 284"},
  {icon:<FaLocationDot />,title:"Address",data:"245 Quigley Blvd, Ste K"},
  {icon:<MdOutlineMailOutline />,title:"Email",data:"support@bestlooker.pro"},
]
const ourBlog = [
  {img:require('./image/blog1.jpeg'),name:"John Doe • 10 December",title:"Meet the New Web Design Trends",info:"Lorem ipsum dolor sit amet, rembe adipiscing elite. Inwege maximus ligula semper metusere pellentesque mattis. Maecenas volutpat, diam enime volutpa."},
  {img:require('./image/blog2.jpeg'),name:"John Doe • 9 December",title:"Minimalistic Product Design",info:"Proin fringilla augue at maximus vestibulum. Nam pulvi vitae neque et porttitor. Praesent sed nisi eleifend, lorem fermentum ac ante lorem ipsum sit amet."},
  {img:require('./image/blog3.jpeg'),name:"John Doe • 8 December",title:"Clean Style in the Web",info:"Proin fringilla augue at maximus vestibulum. Nam pulvi vitae neque et porttitor. Praesent sed nisi eleifend, lorem fermentum ac ante lorem ipsum sit amet."},
]
function App() {
  return (
    <div>
      
      <Header></Header>
        <Routes>
          <Route path='/'  element={<Home demo={counter} blog={ourBlog}/>}></Route>
          <Route path='Elements'  element={<Elements />}></Route>
          <Route path='Blog'  element={<Blog blog={ourBlog}/>}></Route>
          <Route path='Shop'  element={<Shop />}></Route>
          <Route path='Pages'  element={<Pages demo={counter}/>}></Route>
          <Route path='Portfolio'  element={<Portfolio />}></Route>
        </Routes>
      
      <Footer foot={footerData}></Footer>
      
    </div>
  );
}

export default App;
