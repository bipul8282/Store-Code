import React from "react";
import "./App.css";
import {Link} from "react-router-dom"
import NavBar from  "./NavBar"
import Search from "./Search";
import Image from "./Image";
import Guide from "./Guide";
import StoreCode from "./StoreCode";
import Footer from "./Footer";

export default function App() {
  return (
    <div>
         <NavBar/>
      <Search/>
      <Image/>
       <Guide/>
       <StoreCode/>
       <Footer/>
    </div>
  );
}