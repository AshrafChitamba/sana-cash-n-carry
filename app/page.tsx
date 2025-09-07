import { BigClientsSection } from "@/components/BigClientsSection/BigClientsSection";
import { CategoriesSection } from "@/components/CategoriesSection/CategoriesSection";
import { ContactUsSection } from "@/components/ContactSection/ContactUsSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { HistoriesSection } from "@/components/HistoriesSection/HistoriesSection";
import { StoresSection } from "@/components/StoresSection";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <CategoriesSection />
      <BigClientsSection />
      <HistoriesSection />
      <StoresSection />
      <ContactUsSection />
      <Footer />
    </main>
  );
}
