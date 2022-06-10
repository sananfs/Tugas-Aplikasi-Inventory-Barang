import "../../Css/Sidebar.css";
import React from "react";
import SidebarData from "./SidebarData";
import items from "../../data/sidebar.json";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <br />
      <br />
      <h1 className="text-center">TaskPEN</h1>
      <br />
      {items.map((item, index) => (
        <SidebarData key={index} item={item} />
      ))}
    </div>
  );
}
