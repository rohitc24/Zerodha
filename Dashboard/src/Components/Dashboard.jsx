import React from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Order";
import Positions from "./Position";
import Summary from "./Summary";
import WatchList from "./Watchlist";
import GenrealcontextProvider from "./Generalcontextprovider"

const Dashboard = () => {
  
  return (
    <div className="dashboard-container">
      <GenrealcontextProvider>
         <WatchList/>
      </GenrealcontextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;