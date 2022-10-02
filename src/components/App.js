import React from "react";
import NavBar from "./NavBar";
import {Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";


function App(){
    return(
        <div>
            <NavBar>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/About" element={<About/>}/>
                    <Route path="/Login" element={<Login/>}/>
                </Routes>
            </NavBar>
        </div>
    )
}
export default App;