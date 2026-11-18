import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function Loader() {
  const [visible, setVisible] = useState(true);
  const root = useRef(null);
  const progress = useRef(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) {
        setVisible(false);
        return;
      }

      const timeline = gsap.timeline({
        delay: 0.15,
        onComplete: () => setVisible(false),
      });

      timeline
        .to(progress.current, { scaleX: 1, duration: 0.75, ease: "power2.inOut" })
        .to(root.current, { yPercent: -100, duration: 0.7, ease: "power4.inOut" }, "+=0.08");

      return () => timeline.kill();
    },
    { scope: root }
  );

  if (!visible) return null;

  return (
    <div className="site-loader" ref={root} role="status" aria-label="Loading Simple Café">
      <div className="site-loader__content">
        <span className="site-loader__mark">S.</span>
        <p>MAKING MOMENTS SIMPLE</p>
        <div className="site-loader__track">
          <span ref={progress} className="site-loader__progress" />
        </div>
      </div>
    </div>
  );
}

export default Loader;
