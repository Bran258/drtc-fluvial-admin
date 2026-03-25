"use client";

import { driver } from "driver.js";
import "driver.js/dist/driver.css";

type Step = {
  element: string;
  popover: {
    title: string;
    description: string;
  };
};

export const useTour = () => {
  const startTour = (steps: Step[]) => {
    const driverObj = driver({
      showProgress: true,
      animate: true,
      opacity: 0.5,
      padding: 10,
    });

    driverObj.setSteps(steps);
    driverObj.drive();
  };

  return { startTour };
};