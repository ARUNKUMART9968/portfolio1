import { useEffect } from "react";
import ConfettiCanvas from "./components/ConfettiCanvas";
import Ignition from "./components/Ignition";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import GithubStrip from "./components/GithubStrip";
import Projects from "./components/Projects";
import CadenceDemo from "./components/CadenceDemo";
import Toolkit from "./components/Toolkit";
import Road from "./components/Road";
import About from "./components/About";
import StickerWall from "./components/StickerWall";
import Terminal from "./components/Terminal";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Prize from "./components/Prize";
import BikeCursor from "./components/BikeCursor";
import CommandPalette from "./components/CommandPalette";
import BossBar from "./components/BossBar";
import Hud from "./components/Hud";
import { initPortfolio } from "./effects/initPortfolio";

export default function App() {
  useEffect(() => {
    initPortfolio();
  }, []);

  return (
    <>
      <ConfettiCanvas />
      <Ignition />
      <Nav />
      <Hero />
      <Ticker />
      <GithubStrip />
      <Projects />
      <CadenceDemo />
      <Toolkit />
      <Road />
      <About />
      <StickerWall />
      <Terminal />
      <Contact />
      <Footer />
      <Prize />
      <BikeCursor />
      <CommandPalette />
      <BossBar />
      <Hud />
    </>
  );
}
