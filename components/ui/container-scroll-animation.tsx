"use client";

import React, { useEffect, useRef, useState, useSyncExternalStore } from "react";
import {
  motion,
  MotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

type ContainerScrollProps = {
  titleComponent: React.ReactNode;
  children: React.ReactNode;
};

const subscribeToHydration = () => () => {};
const getHydratedSnapshot = () => true;
const getServerSnapshot = () => false;

export function ContainerScroll({
  titleComponent,
  children,
}: ContainerScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const isHydrated = useSyncExternalStore(
    subscribeToHydration,
    getHydratedSnapshot,
    getServerSnapshot,
  );
  const reduceMotionPreference = useReducedMotion();
  const reduceMotion = isHydrated && Boolean(reduceMotionPreference);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const updateViewport = () => setIsMobile(media.matches);

    updateViewport();
    media.addEventListener("change", updateViewport);

    return () => media.removeEventListener("change", updateViewport);
  }, []);

  const rotate: MotionValue<number> = useTransform(
    scrollYProgress,
    [0.12, 0.58],
    isMobile ? [5, 0] : [12, 0],
  );

  const scale: MotionValue<number> = useTransform(
    scrollYProgress,
    [0.12, 0.58],
    isMobile ? [0.96, 1] : [0.92, 1],
  );

  const cardTranslate: MotionValue<number> = useTransform(
    scrollYProgress,
    [0.12, 0.58],
    isMobile ? [34, 0] : [110, -24],
  );

  const titleTranslate: MotionValue<number> = useTransform(
    scrollYProgress,
    [0.12, 0.58],
    isMobile ? [12, -16] : [28, -68],
  );

  return (
    <div
      className="platform-scroll-scene"
      data-container-scroll=""
      ref={containerRef}
    >
      <div className="platform-scroll-content">
        <motion.div
          className="platform-scroll-title"
          style={{
            translateY: reduceMotion ? 0 : titleTranslate,
          }}
        >
          {titleComponent}
        </motion.div>

        <motion.div
          className="shell platform-stage platform-scroll-card"
          style={{
            rotateX: reduceMotion ? 0 : rotate,
            scale: reduceMotion ? 1 : scale,
            translateY: reduceMotion ? 0 : cardTranslate,
            transformOrigin: "center bottom",
          }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
