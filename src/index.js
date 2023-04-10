import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import AddBus from "./AddBus";
import BusDetail from "./BusDetail";
import BusList from "./BusList";
import ContactUs from "./ContactUs";
import Home from "./Home";
import Layout from "./Layout";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/contactus" element={<ContactUs />}></Route>
        <Route path="/buslist" element={<BusList />}></Route>
        <Route path="/bus/add" element={<AddBus />}></Route>
        <Route path="/bus/:id" element={<BusDetail />}></Route>
        <Route path="/bus/edit/:id" element={<AddBus />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
