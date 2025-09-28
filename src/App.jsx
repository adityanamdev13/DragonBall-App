import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/Home";
import AllCharacters from "./Pages/AllCharacters";
import CharacterDetail from "./Pages/CharacterDetail";
import AllPlanets from "./Pages/AllPlanets";
import PlanetDetail from "./Pages/PlanetDetail";

const App = () => {
  return (
    <>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/characters" element={<AllCharacters />} />
            <Route path="/character/:id" element={<CharacterDetail />} />

             <Route path="/planets" element={<AllPlanets />} />
             <Route path="/planet/:id" element={<PlanetDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
