import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CleaningServices from "./cleaning-services/CleaningServices.tsx";
import FloatingContact from "./home/FloatingContact.tsx";
import Footer from "./home/Footer.tsx";
import Header from "./home/Header.tsx";
import Homepage from "./home/Homepage.tsx";

import CleaningAfterBuild from "./cleaning/AfterconstructionCleaning.tsx";
import LaundryServices from "./laundry-services/LaundryServices.tsx";

import HouseCleaning from "./cleaning/HouseCleaning.tsx";
import IndustrialCleaning from "./cleaning/IndustrialCleaning.tsx";
import PeriodicIndustrialCleaning from "./cleaning/PeriodicIndustrialCleaning.tsx";
import Contact from "./home/Contact.tsx";
import "./index.css";
import MattressCleaning from "./laundry/MattressCleaning.tsx";
import SofaCleaning from "./laundry/SofaCleaning.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/my-cleanpro">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dich-vu-ve-sinh" element={<CleaningServices />} />
        <Route path="/dich-vu-giat-ui" element={<LaundryServices />} />
        <Route path="/ve-sinh-sau-xay-dung" element={<CleaningAfterBuild />} />
        <Route path="/ve-sinh-nha-o" element={<HouseCleaning />} />
        <Route path="/giat-ghe-sofa" element={<SofaCleaning />} />
        <Route path="/ve-sinh-cong-nghiep" element={<IndustrialCleaning />} />
        <Route
          path="/ve-sinh-cong-nghiep-dinh-ki"
          element={<PeriodicIndustrialCleaning />}
        />
        <Route path="/ve-sinh-rem" element={<MattressCleaning />} />
        <Route path="/lien-he" element={<Contact />} />
        {/* Route mới */}
      </Routes>
      <FloatingContact />
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
