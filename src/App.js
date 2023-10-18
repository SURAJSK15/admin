import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarComp from "./Componets/Common/Navbar";
import CreateAds from "./Pages/Ads";
import DashBoard from "./Pages/Dashboard";
import TextAd from "./Componets/TextAd";
import MediaAds from "./Componets/Media";

function App() {
  return (
    <BrowserRouter>
      <NavbarComp/>
      <Routes>
        <Route path="/" element={<DashBoard />}> </Route>
        <Route path="/createads" element={<CreateAds />}> </Route>
        <Route path="/textads" element={<TextAd />}> </Route>
        <Route path="/mediaads" element={<MediaAds />}> </Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
