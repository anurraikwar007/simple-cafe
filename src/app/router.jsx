import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { useSmoothScroll } from "./providers/ScrollProvider";
import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";
import PageTransition from "../components/animations/PageTransition/PageTransition";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Menu from "../pages/Menu/Menu";
import Contact from "../pages/Contact/Contact";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function RouteContent() {
  const location = useLocation();
  const smoothScroll = useSmoothScroll();

  useEffect(() => {
    if (smoothScroll) {
      smoothScroll.scrollTo("top", { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }

    requestAnimationFrame(() => ScrollTrigger.refresh());
  }, [location.pathname, smoothScroll]);

  return (
    <PageTransition routeKey={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </PageTransition>
  );
}

function AppLayout() {
  return (
    <div className="app-shell">
      <Navbar />
      <main id="main-content">
        <RouteContent />
      </main>
      <Footer />
    </div>
  );
}

function AppRouter() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default AppRouter;
