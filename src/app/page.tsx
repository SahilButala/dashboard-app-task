"use client"

import AppBarChart from "@/components/AppBarChart";
import { AreaChartComponent } from "@/components/AreaCharts";
import CardList from "@/components/CardList";
import { PieChartComponent } from "@/components/PiChart";
import { RadialChartComponent } from "@/components/RadialChart";
import React from "react";

const Home = () => {

  const handleClick = ()=>{
    console.log("hell0 from App bar chart ")
  }
  return (
    <div className="px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
        <div onClick={()=>handleClick()} className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
          <AppBarChart />
        </div>
        <div className="bg-primary-foreground p-4 rounded-lg">
          <PieChartComponent />
        </div>
        <div className="bg-primary-foreground p-4 rounded-lg">
          <CardList title={"Popular Content"} />
        </div> 
        <div className="bg-primary-foreground p-4 rounded-lg">
          <CardList title={"Latest Transictions"} />
        </div>
        <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
          <AreaChartComponent />
        </div>
        <div className="bg-primary-foreground p-4 rounded-lg">
          <RadialChartComponent />
        </div>
      </div>
    </div>
  );
};

export default Home;
