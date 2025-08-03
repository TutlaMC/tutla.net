import Image from "next/image";
import Aurora from "./components/Aurora";
import LiquidGlass from "./components/LiquidGlass";
export default function Home() {
  return (
    
    <main className="relative min-h-screen bg-black text-gray-900 overflow-hidden">
      <div id="hero" className="flex items-center h-[80vw]">
        <Aurora
          colorStops={["#F26A3D","#A855F7","#22D3EE"]}
          blend={0.5}
          amplitude={0.8}
          speed={1.2}
        />     

      </div>
    </main>
  )
}
