
// demo 
import { WorldMapDemo } from "./components/poc/worldMap";
import GlowingEffectDemo from "./components/poc/glowing-effect-demo";
import MeteorsPOC from "./components/poc/meteors";

export default function Home() {
  return (
    <div className="relative">
      <MeteorsPOC />
      <WorldMapDemo />
      <GlowingEffectDemo />

    </div>
  );
}
