import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function PageTransition({ children, routeKey }) {
  const root = useRef(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) return;

      gsap.fromTo(
        root.current,
        { autoAlpha: 0, y: 12 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.55,
          ease: "power2.out",
          clearProps: "all",
        }
      );
    },
    { scope: root, dependencies: [routeKey], revertOnUpdate: true }
  );

  return (
    <div ref={root} className="page-transition" key={routeKey}>
      {children}
    </div>
  );
}

export default PageTransition;
