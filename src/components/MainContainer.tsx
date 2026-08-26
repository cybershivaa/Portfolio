import { lazy, Suspense, useEffect, useState } from "react";
import About from "./About";
import Achievements from "./Achievements";
import AnnouncementBar from "./AnnouncementBar";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import FeaturedWin from "./FeaturedWin";
import Landing from "./Landing";
import Navbar from "./Navbar";
import Skills from "./Skills";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import setSplitText from "./utils/splitText";

const TechStack = lazy(() => import("./TechStack"));

const MainContainer = () => {
  // Default to false (mobile) — safely set the real value inside useEffect
  // to avoid Vercel/SSR crash from accessing window before hydration
  const [isDesktopView, setIsDesktopView] = useState<boolean>(false);

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler(); // sets correct value on first client-side render
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className="container-main">
      <AnnouncementBar />
      <Cursor />
      <Navbar />
      <SocialIcons />
      <div id="smooth-wrapper">
        <div id="smooth-content" className="page-transition-wrapper">
          <div className="container-main">
            <Landing />
            <FeaturedWin />
            <About />
            <Skills />
            <WhatIDo />
            <Career />
            <Work />
            <Achievements />
            {isDesktopView && (
              <Suspense fallback={<div>Loading....</div>}>
                <TechStack />
              </Suspense>
            )}
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
