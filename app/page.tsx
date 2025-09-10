import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { StorySection } from "@/components/StorySection";
import { MapSection } from "@/components/MapSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <StorySection />
      <MapSection />
      <ContactSection />
    </main>
  );
}
