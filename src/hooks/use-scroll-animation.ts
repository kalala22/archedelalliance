"use client";

import { useEffect } from "react";

/**
 * Register GSAP ScrollTrigger plugin and perform cleanup on unmount.
 * Import this in components that use GSAP scroll-driven animations.
 */
export function useScrollAnimation() {
  useEffect(() => {
    let ScrollTrigger: typeof import("gsap/ScrollTrigger").ScrollTrigger;

    const init = async () => {
      const gsapModule = await import("gsap");
      const stModule = await import("gsap/ScrollTrigger");
      ScrollTrigger = stModule.ScrollTrigger;
      gsapModule.gsap.registerPlugin(ScrollTrigger);
    };

    init();

    return () => {
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
    };
  }, []);
}
