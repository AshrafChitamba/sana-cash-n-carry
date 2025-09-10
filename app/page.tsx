import { AboutSection } from "@/components/AboutSection";
import { HeroSection } from "@/components/HeroSection";
import { StorySection } from "@/components/StorySection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <StorySection />
    </main>
  );
}
