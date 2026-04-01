"use client";

import { driver } from "driver.js";
import "driver.js/dist/driver.css";

type Step = {
    element: string;
    popover: {
        title: string;
        description: string;
    };
    stagePadding?: number; // 👈 opcional
};

export const useTour = () => {
    const startTour = (steps: Step[]) => {
        const driverObj = driver({
            showProgress: true,
            animate: true,
            overlayOpacity: 0.5,
        });

        driverObj.setSteps(steps);
        driverObj.drive();
    };

    return { startTour };
};