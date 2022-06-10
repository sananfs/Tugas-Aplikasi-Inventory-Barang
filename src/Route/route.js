import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { SettingHomePage, SettingLoginPage, SettingRegisterPage, SettingProductPage } from "../Setting/index";

export default function ClassRouter() {
  return (
    <Routes>
      <Route path="/" element={<SettingHomePage />} /> <Route path="/Login" element={<SettingLoginPage />} /> <Route path="/Register" element={<SettingRegisterPage />} />
      <Route path="/Product" element={<SettingProductPage />} />
    </Routes>
  );
}
