import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { StorySection } from "@/components/StorySection";
import { MapSection } from "@/components/MapSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <StorySection />
      <MapSection />
    </main>
  );
}
