// demo 
import { WorldMapDemo } from "./components/poc/worldMap";
import GlowingEffectDemo from "./components/poc/glowing-effect-demo";
// import MeteorsPOC from "./components/poc/meteors";
// import HeroSection from "./components/poc/hero-section";
import MeteorHero from "./components/poc/meteor-hero";

export default function Home() {
  return (
    <div className="relative">
      {/* <HeroSection /> */}
      <MeteorHero />
      {/* <MeteorsPOC /> */}
      <WorldMapDemo />
      <GlowingEffectDemo />
    </div>
  );
}
