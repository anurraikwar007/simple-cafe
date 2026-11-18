import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function ScrollReveal({
  children,
  className = "",
  as: Tag = "div",
  y = 34,
  duration = 0.85,
  delay = 0,
  once = true,
}) {
  const root = useRef(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion || !root.current) return;

      gsap.fromTo(
        root.current,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration,
          delay,
          ease: "power3.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: root.current,
            start: "top 88%",
            once,
            invalidateOnRefresh: true,
          },
        }
      );
    },
    { scope: root, dependencies: [y, duration, delay, once], revertOnUpdate: true }
  );

  return (
    <Tag ref={root} className={`scroll-reveal ${className}`}>
      {children}
    </Tag>
  );
}

export default ScrollReveal;
