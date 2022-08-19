import React, { useState } from "react";
import "./dashboard.css";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sideBar/Sidebar";
import Main from "../../components/main/Main";


const Dashboard = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const openSideBar = () => {
    setSideBarOpen(true);
  };

  const closeSidebar = () => {
    setSideBarOpen(false);
  };

  return (
    <div className="container">
      <Navbar sidebarOpen={sideBarOpen} openSidebar={openSideBar} />
      
      <Main/>
      <Sidebar sidebarOpen={sideBarOpen} closeSidebar={closeSidebar} />
    </div>
  );
};

export default Dashboard;
