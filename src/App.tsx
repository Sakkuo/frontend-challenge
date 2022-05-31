import React, { useState } from "react";
import "./App.css";
import ImageContainer from "./components/mainPage/ImageContainer/ImageContainer";
import NavigationBar from "./UI/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Humans from "./components/FavouritePage/FavouriteContainer/FavouriteImage";

const App = () => {

    return (
        <BrowserRouter>
            <div className="App">
                <NavigationBar />
                <Routes>
                    <Route path="/favourite" element={<Humans />} />
                    <Route path="/" element={<ImageContainer />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
