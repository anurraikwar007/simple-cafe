import { createContext, useContext, useEffect, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SmoothScrollContext = createContext(null);

export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}

function ScrollProvider({ children }) {
  const [scrollInstance, setScrollInstance] = useState(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const locomotiveScroll = new LocomotiveScroll({
      lenisOptions: {
        lerp: reducedMotion ? 1 : 0.085,
        smoothWheel: !reducedMotion,
        syncTouch: false,
        respectReducedMotion: true,
        stopInertiaOnNavigate: true,
      },
      initCustomTicker: (render) => gsap.ticker.add(render),
      destroyCustomTicker: (render) => gsap.ticker.remove(render),
    });

    setScrollInstance(locomotiveScroll);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const refreshFrame = requestAnimationFrame(refresh);

    return () => {
      cancelAnimationFrame(refreshFrame);
      window.removeEventListener("load", refresh);
      locomotiveScroll.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={scrollInstance}>
      {children}
    </SmoothScrollContext.Provider>
  );
}

export default ScrollProvider;
