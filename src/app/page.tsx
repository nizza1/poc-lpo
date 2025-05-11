// demo 
import { WorldMapDemo } from "./components/poc/worldMap";
import GlowingEffectDemo from "./components/poc/glowing-effect-demo";
// import MeteorsPOC from "./components/poc/meteors";
// import HeroSection from "./components/poc/hero-section";
import MeteorHero from "./components/poc/meteor-hero";
import Facts from "./components/poc/facts";
// import { DeployFeature } from "./components/poc/globe2/cobe";
import { GlobeCustom } from "./components/poc/globe2/globeCustom";
export default function Home() {
  return (
    <div className="relative">
      {/* <HeroSection /> */}
      <MeteorHero />
      {/* <MeteorsPOC /> */}
      <WorldMapDemo />
      <GlowingEffectDemo />
      <Facts />
      <GlobeCustom />
    </div>
  );
}
