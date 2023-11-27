import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/aboutUs/AboutUs";
import ActiveWear from "./components/activeWear/ActiveWear";
import ContactUs from "./components/contactUs/ContactUs";
import Introduction from "./components/introduction/Introduction";
import NewArrivals from "./components/newArrivals/NewArrivals";
import Shoes from "./components/shoes/Shoes";
import Product from "./components/product/Product";

const ContainerRoutes = () => {
  return (
    <Routes>
    <Route path="/sports" element={<Introduction />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/active-wear" element={<ActiveWear />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/introduction" element={<Introduction />} />
      <Route path="/new-arrivals" element={<NewArrivals />} />
      <Route path="/shoes" element={<Shoes />} />
      <Route path="/:productId" element={<Product />} />
    </Routes>
  );
};

export default ContainerRoutes;
