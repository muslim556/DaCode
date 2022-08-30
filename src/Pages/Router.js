import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "../Components/Components";
import { Home } from "./Home/Home";
import { Case } from "./Case/Case";
import { Team } from "../Pages/Team/Team";
import { Service } from "../Pages/Service/Service";
import { Blog } from "../Pages/Blog/Blog";
import { SeeAll } from "./SeeAll/SeeAll";
import { Blog2 } from "./Blog2/Blog2";

export function Router() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/case" element={<Case />} />
        <Route path="/team" element={<Team />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog2" element={<Blog2 />} />
        <Route path="/all%items" element={<SeeAll />} />
      </Routes>
      <Footer />
    </>
  );
}
