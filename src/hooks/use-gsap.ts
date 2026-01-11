"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

/**
 * Custom hook for GSAP animations with automatic cleanup
 */
export function useGsap<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    return () => {
      // Cleanup timeline on unmount
      if (tl.current) {
        tl.current.kill();
      }
    };
  }, []);

  return { ref, tl };
}

/**
 * Hook for scroll-triggered animations
 */
export function useScrollTrigger<T extends HTMLElement = HTMLDivElement>(
  animation: (element: T, tl: gsap.core.Timeline) => void,
  deps: React.DependencyList = []
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      animation(ref.current!, tl);
    }, ref);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}

/**
 * Hook for fade-in animation on scroll
 */
export function useFadeIn<T extends HTMLElement = HTMLDivElement>(options?: {
  duration?: number;
  delay?: number;
  y?: number;
  start?: string;
}) {
  const { duration = 1, delay = 0, y = 50, start = "top 85%" } = options || {};
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        {
          opacity: 0,
          y,
        },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start,
            toggleActions: "play none none reverse",
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [duration, delay, y, start]);

  return ref;
}

/**
 * Hook for stagger animation on children elements
 */
export function useStaggerIn<T extends HTMLElement = HTMLDivElement>(
  childSelector: string,
  options?: {
    duration?: number;
    stagger?: number;
    y?: number;
    start?: string;
  }
) {
  const {
    duration = 0.8,
    stagger = 0.1,
    y = 30,
    start = "top 85%",
  } = options || {};
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        childSelector,
        {
          opacity: 0,
          y,
        },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start,
            toggleActions: "play none none reverse",
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [childSelector, duration, stagger, y, start]);

  return ref;
}
