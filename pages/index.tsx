import Image from "next/image";
import Aurora from "./Aurora";
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-gray-900">
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
    </main>
  )
}
