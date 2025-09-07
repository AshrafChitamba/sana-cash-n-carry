import { BigClientsSection } from "@/components/BigClientsSection";
import { CategoriesSection } from "@/components/CategoriesSection";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { HistoriesSection } from "@/components/HistoriesSection";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <CategoriesSection />
      <BigClientsSection />
      <HistoriesSection />
    </main>
  );
}
