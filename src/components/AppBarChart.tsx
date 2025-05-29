"use client";

import React from "react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { Button } from "./ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#F2F2F2",
  },
  mobile: {
    label: "Mobile",
    color: "#FF9B45",
  },
} satisfies ChartConfig;

const AppBarChart = () => {
  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ];

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="mb-1 font-semibold">Total Revenue</h1>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="cursor-pointer" variant={"outline"}>More info</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Information about Chart</DialogTitle>
              <DialogDescription className="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatem praesentium mollitia fugiat earum, error animi modi
                natus nobis libero ipsam sunt doloremque enim temporibus debitis
                est? Quae dolores laudantium culpa tempore consectetur commodi
                deserunt veritatis fuga amet nihil deleniti nesciunt, itaque
                ratione ullam explicabo ea!
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full mt-2"
      >
        <BarChart accessibilityLayer data={chartData}>
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis
            // dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <CartesianGrid vertical={false} horizontal={true} />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default AppBarChart;
